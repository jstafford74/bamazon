var inquirer = require("inquirer");
var mysql = require("mysql");
// const DB = require('./DB');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "$Tafford19",
    database: "bamazon"
});

// first connection
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    //createProduct();
    listProducts();
});
/**
 * Main entry point to script
 * This is an 'async' function
 * @see {@link https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await}
 */


/**
  * Main entry point to app
  */

//   async function run() {
//      const db = new DB();
//      await db.createConnection();
 
//      db.getAllItems();
//    }
  
//    run();

var items;
var item;
function listProducts(){
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        items = res;
        for( var i=0; i < items.length; i++){
            console.log( items[i].item_id, items[i].product_name, items[i].price )
        }
        var itemIds = items.map(item => item.item_id)

        requestPurchase( itemIds )

    })
}

function requestPurchase(itemIds){
    inquirer.prompt([
        {
            name: "itemId",
            message: "Please enter the Item Id of the product you would like to purchase",
            type: 'input',
            validate: function(input){
                if( itemIds.indexOf( parseInt( input.trim() ) ) === -1){
                    return "Item id does not exist"
                }
                return true;
            }
        },
        {
            name: "quant",
            message: "What quantity?",
            type: 'input',
            validate: function(input) {
                var isValid = !isNaN(parseInt(input));
                return isValid || "Quantity must be a number";
            }
        }
    ]).then(function (answers) {
        var itemId = parseInt(answers.itemId);
        var quant = answers.quant
        var inStock = checkIfInStock( itemId , quant )
        
        if( inStock ){
            purchaseItem( itemId , quant )
        } else {
            console.log('Insufficient quantity of item in stock!')
            reset();
        }
    })
}
function checkIfInStock(itemId, quant){
    for( var i=0; i < items.length; i++){
        if( itemId === items[i].item_id ){
            item = items[i];
        }
    }
    if( item.stock_quantity >= quant ){
        return true;
    } else {
        return false;
    }
}

function purchaseItem( itemId, quant){
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: quant
            },
            {
                item_id: itemId
            }
        ],
        function (err, res) {
            console.log("Purchase complete!");
            var total = item.price * quant;
            console.log('Total comes to:', total,"\n")
            updateProductSales(itemId, total);
            reset();
        }
    );
}
function updateProductSales(itemId, total){
    total = connection.escape( total );
    var query = connection.query(
        "UPDATE products SET product_sales=product_sales + "+total+" WHERE ?",
        [
            {
                item_id: itemId
            }
        ],
        function (err, res) {
            if( err ) console.log( err )
        }
    );
    //console.log( query.sql )
}
function reset(){
    items = null;
    item = null;
    listProducts();
};
