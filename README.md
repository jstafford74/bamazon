# bamazon

Link to demo: https://drive.google.com/file/d/1pZ0kMeaXUS7x2vFPVBLvdQoWgenIuno-/view

## Overview
In this activity, you'll be creating an Amazon-like storefront with the MySQL skills you learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

# This exercise has 3 sections: _Customer_, _Supervisor_ & _Manager_.
## Database Requirements:
- [ ] 1. Create a MySQL Database called `bamazon`.
- [ ] 2. Create a Table inside of that database called `products`.
  - The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

3. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

4. Create a new MySQL table called `departments`. Your table should include the following columns:

   * department_id

   * department_name

   * over_head_costs (A dummy number you set for each department)
5. Modify the products table so that there's a product_sales column = price of the product multiplied by the quantity purchased


## Node Application Requirements:
- [ ] Create a Node application called `bamazonCustomer.js`. 
Running this application will:
  1. - [ ] Display all of the items available for sale. Include the ids, names, and prices of products for sale.
  2. - [ ] The app should then prompt users with two messages.
    * The first should ask them the ID of the product they would like to buy.
    * The second message should ask how many units of the product they would like to buy.

  3. - [ ] Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request. If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

  4. - [ ] However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.

- [ ] Create a new Node application called `bamazonManager.js`. 
  - Running this application will:

  - 1. [ ]  * List a set of menu options:

  - 2. [ ] * View Products for Sale: the app should list every available item: the item IDs, names, prices, and quantities.
    
  - 3. [ ] * View Low Inventory: then it should list all items with an inventory count lower than five.
    
  - 4. [ ] * Add to Inventory: your app should display a prompt that will let the manager "add more" of any item currently in the store.
    
  - 5. [ ] * Add New Product: it should allow the manager to add a completely new product to the store.

  - 6. [ ] * If a manager selects `View Products for Sale`, 

  - 7. [ ] * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

- [ ] Create another Node app called `bamazonSupervisor.js`. 
Running this application will list a set of menu options:

   - 1. [ ] View Product Sales by Department, the app should display a summarized table in their terminal/bash window. Use the table below as a guide.

| department_id | department_name | over_head_costs | product_sales | total_profit |
| ------------- | --------------- | --------------- | ------------- | ------------ |
| 01            | Electronics     | 10000           | 20000         | 10000        |
| 02            | Clothing        | 60000           | 100000        | 40000        |

   
-  The `total_profit` column should be calculated on the fly using the difference between `over_head_costs` and `product_sales`. `total_profit` should not be stored in any database. You should use a custom alias.

   - 2. [ ] Create New Department


### HINTS:
  - Make sure you save and require the MySQL and Inquirer npm packages in your homework files--your app will need them for data input and storage.
  - Make sure your app still updates the inventory listed in the `products` column.
  - You may need to look into aliases in MySQL.
  - You may need to look into GROUP BYs.
  - You may need to look into JOINS.
  - There may be an NPM package that can log the table to the console. What's is it? Good question :)

