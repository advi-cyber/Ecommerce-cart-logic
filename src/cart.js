// Cart management functions

let cart = [];

// Add product to cart
function addToCart(product, quantity) {

    if (quantity > product.stock) {
        console.log(
            `Cannot add ${quantity} ${product.name}(s). Only ${product.stock} available in stock.`
        );
        return;
    }

    cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity
    });

    console.log(`${product.name} added to cart.`);
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);

    console.log(`Product with ID ${productId} removed from cart.`);
}

// Update quantity
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);

    if (item) {
        item.quantity = newQuantity;
        console.log(`${item.name} quantity updated to ${newQuantity}.`);
    } else {
        console.log("Product not found in cart.");
    }
}

// Display cart items
function viewCart() {
    console.log("\nCart Contents:");

    if (cart.length === 0) {
        console.log("Cart is empty.");
        return;
    }

    cart.forEach(item => {
        console.log(
            `${item.name} | Price: ₹${item.price} | Quantity: ${item.quantity}`
        );
    });
}

// Calculate total amount with discount
function calculateTotal() {
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    if (total > 50000) {
        console.log("\nDiscount Applied: 10%");
        total = total - (total * 0.10);
    }

    return total;
}

module.exports = {
    addToCart,
    removeFromCart,
    updateQuantity,
    viewCart,
    calculateTotal
};