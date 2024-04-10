const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');
const productDescription = urlParams.get('beschrijving');
const productPrice = urlParams.get('prijs');

console.log(`Product Name: ${productName}`);
console.log(`Product Description: ${productDescription}`);
console.log(`Product Price: ${productPrice}`);