function isEmpty(str) {
    return str === "";
}
console.log(isEmpty("")); // true
console.log(isEmpty("abc")); // false

function convertToGEL(priceUSD, rate) {
    return priceUSD * rate;
}