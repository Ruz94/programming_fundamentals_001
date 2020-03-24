function addVAT(price) {
    return price + (0.2 * price);
}

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function makeHalfPrice(price) {
    const discount = 0.5 * price;
    return price + discount;
}
makeHalfPrice(100);

function countBooks(bookTitles) {
    return bookTitles.length;
}

function isInStock(book) {
if (book.quantity) {
    return true;
}
return false;
}

function getTotalOrderPrice(price, quantity) {
    //rounded to two decimal places as money
    return Math.round(price * quantity * 1.2 * 100) / 100;
}

module.exports = {
    addVAT,
    getFullName,
    makeHalfPrice,
    countBooks,
    isInStock,
    getTotalOrderPrice
};
