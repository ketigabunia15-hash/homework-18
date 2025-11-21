function isEmpty(str) {
    return str === "";
}
console.log(isEmpty("")); // true
console.log(isEmpty("abc")); // false

function convertToGEL(priceUSD, rate) {
    return priceUSD * rate;
}

function getCountryByCurrency(code) {
    if (code === "USD") {
        return "United States";
    } 
    else if (code === "EUR") {
        return "European Union";
    } 
    else if (code === "GEL") {
        return "Georgia";
    } 
    else {
        return "Unknown currency";
    }
}
