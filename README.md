# E-Commerce Cart Logic

## Internship Project

### Intern Details

* **Name:** Advaita Praveen Kumar Parikkal
* **Intern ID:** CITS2448
* **Duration:** 4 Weeks
* **Project Title:** E-Commerce Cart Logic

---

## Project Overview

The E-Commerce Cart Logic project is a Node.js-based application developed to simulate the core functionality of an online shopping cart system. The project demonstrates how products can be added to a cart, removed from a cart, updated, validated against stock availability, and processed through checkout.

The primary objective of this project is to implement business logic commonly used in e-commerce platforms while maintaining a modular and organized code structure.

---

## Features

* Product Catalog Management
* Add Products to Cart
* Remove Products from Cart
* Update Product Quantity
* View Cart Contents
* Stock Availability Validation
* Automatic Discount Calculation
* Checkout Process
* Order Summary Generation

---

## Technologies Used

* JavaScript
* Node.js
* Visual Studio Code
* GitHub

---

## Project Structure

```text
ecommerce-cart-logic/
│
├── src/
│   ├── products.js
│   ├── cart.js
│   ├── checkout.js
│   └── app.js
│
├── screenshots/
│
├── documentation/
│
├── README.md
│
└── package.json
```

---

## Business Logic Implemented

### Product Management

Products are stored with:

* Product ID
* Product Name
* Product Price
* Available Stock

### Cart Operations

The cart supports:

* Adding products
* Removing products
* Updating quantities
* Viewing cart details

### Stock Validation

The system prevents users from adding quantities greater than the available stock.

### Discount Logic

A 10% discount is automatically applied when the total cart value exceeds ₹50,000.

### Checkout Process

The checkout module generates an order confirmation and displays the final payable amount.

---

## Sample Output

```text
Cannot add 15 Laptop(s). Only 10 available in stock.

Laptop added to cart.
Headphones added to cart.

Cart Contents:
Laptop | Price: ₹50000 | Quantity: 1
Headphones | Price: ₹2000 | Quantity: 5

Discount Applied: 10%

Total Amount: ₹54000

========== CHECKOUT ==========
Order placed successfully!
Amount Paid: ₹54000
Thank you for shopping with us!
```

---

## Learning Outcomes

Through this project, the following concepts were learned and implemented:

* JavaScript Fundamentals
* Node.js Module System
* Function-Based Programming
* Business Logic Design
* Data Validation
* Project Structuring
* GitHub Repository Management

---

## Conclusion

This project successfully demonstrates the implementation of essential e-commerce cart functionalities using JavaScript and Node.js. The application provides a structured approach to managing products, validating stock, calculating discounts, and processing customer orders.
