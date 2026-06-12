// Main application file

const products = require("./products");
const cart = require("./cart");
const checkout = require("./checkout");

// Try to add more laptops than available
cart.addToCart(products[0], 15);

// Valid additions
cart.addToCart(products[0], 1);
cart.addToCart(products[2], 5);

// Display cart
cart.viewCart();

// Calculate total
const total = cart.calculateTotal();

console.log("\nTotal Amount: ₹" + total);

// Checkout
checkout(total);