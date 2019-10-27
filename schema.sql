DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
    item_id INT NOT NULL
    AUTO_INCREMENT,
  product_name VARCHAR
    (250) NOT NULL,
  department_name VARCHAR
    (50) NOT NULL,
  price DECIMAL
    (10,2) NOT NULL,
  stock_quantity INT NOT NULL,
  product_sales DECIMAL
    (10,2) DEFAULT 0,
  PRIMARY KEY
    (item_id)
);


    INSERT INTO products
        (product_name, department_name, price, stock_quantity,product_sales)
    VALUES
        ("Paper Mate Gel Pens", "Toys", 12.85 , 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity,product_sales)
    VALUES("DYMO Label Maker" , "Toys" , 27.67 , 75);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity,product_sales)
    VALUES
        ("Ring Floodlight Cam" , "Electronics" , 199.00 , 75);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity,product_sales)
    VALUES
        ("Dash Cam" , "Electronics" , 33.99 , 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity,product_sales)
    VALUES
        ("Wireless Wifi Camera" , "Electronics" , 67.99 , 55);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity,product_sales)
    VALUES
        ("Kleenex Tissues" , "Beauty" , 3.10 , 200);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity,product_sales)
    VALUES("Native Deodorant" , "Beauty" , 25.20 , 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity,product_sales)
    VALUES(" GoBetter Nail Clippers", "Beauty" , 5.92 , 225);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity,product_sales)
    VALUES("Generac 2.2 Kw Generator" , "Lawn & Garden" , 498.16 , 15);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity,product_sales)
    VALUES("Scotts Turf Builder Grass Seed", "Lawn & Garden" , 22.10 , 125);

    CREATE TABLE departments
    (
        department_id INT NOT NULL
        AUTO_INCREMENT,
  department_name VARCHAR
        (50) NOT NULL,
  over_head_costs INT DEFAULT 0,
  PRIMARY KEY
        ( department_id )
);
