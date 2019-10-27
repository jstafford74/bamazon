
/**
 * @see {@link https://www.npmjs.com/package/promise-mysql}
 */
const mysql = require('promise-mysql');


/**
 * Bring DB config in from separate file
*/
const conf = require('./config.js');

/**
 * A DB connection with the needed queries
 */
class DB {
  /**
   * Creates a connection if one does not already exist
   * @return {Promise} the connection object
 */
  async createConnection() {
    if (this.conn) return this.conn;
    this.conn = await mysql.createConnection(conf);
    return this.conn;
  }

  /**
 * Reads all items from the products table
 * @return {Promise}
 */
  async getAllItems() {
    this.conn.query(
      'SELECT item_id,product_name, department_name, price, stock_quantity,product_sales FROM products'

    );
  }
  /**
 * Reads one item from the product table by Id
 * @param {string} name
 * @return {Promise}
 */
  async getItemByID(itemId) {
    return this.conn.query(
      'SELECT item_id,product_name, department_name, price, stock_quantity FROM products WHERE ?',
      {
        item_id: itemId,
      }
    );
  }

  /**
 * Adds an item to the product table
 * @param {string} name the product name
 * @param {number} price the product's price
 * @return {Promise}
 */
  createProduct(name, department, priCe, quant) {
    return this.conn.query(
      'INSERT INTO products SET ?',
      {
        product_name: name,
        department_name: department,
        price: priCe,
        stock_quantity: quant,

      });
  }

  /**
 * Updates inventory in the products table
 * @param {string} itemName
 * @param {number} quant
 * @return {Promise}
 */
  addInventory(name, quant) {
    return this.conn.query(
      'UPDATE products SET ? WHERE ?',
      [
        {
          stock_quantity: quant,
        },
        {
          product_name: name,
        },
      ]);
  }
}

module.exports = DB;


