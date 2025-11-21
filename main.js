import { products } from "./data";

function isEmpty(str) {
    return str === "";
}
console.log(isEmpty("")); // true
console.log(isEmpty("abc")); // false

function convertToGEL(priceUSD, rate) {
    return priceUSD * rate;
}
console.log(convertToGEL(10, 2.5)); // 25
console.log(convertToGEL(20, 2.5)); // 50

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
console.log(getCountryByCurrency("USD")); // "United States"
console.log(getCountryByCurrency("EUR")); // "European Union"
 
function toLowerCase(str) {
    return str.toLowerCase();
}
console.log(toLowerCase("Hello World")); // "hello world"
console.log(toLowerCase("JavaScript")); // "javascript"

function filterGreaterThan100(numbers) {
    return numbers.filter(function(num) {
        return num > 100;
    });
}
console.log(filterGreaterThan100([50, 150, 200, 80])); // [150, 200]
console.log(filterGreaterThan100([10, 20, 30])); // []

funqction getCheapestProduct(products) {
    if (!prodicts || products.length == 0 ) return null;
    let cheapest = products[0];
    for (let i = 1; i < products.length; i++) {
        if (products[i].price < cheapest.price) {
            cheapest = products[i];
        }
    }               
    return cheapest;    
}
const cheapest = getCheapestProduct(data.products);
console.log('cheapest product:', cheapest.name, cheapest.price); // { name: "Product A", price: 50 }