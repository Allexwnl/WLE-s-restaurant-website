const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');
const productDescription = urlParams.get('beschrijving');
const productPrice = urlParams.get('prijs');

console.log(`Product Name: ${productName}`);
console.log(`Product Description: ${productDescription}`);
console.log(`Product Price: ${productPrice}`);
const maincontainer = document.getElementById('maincontainer')

const productnaame = document.createElement('input')
productnaame.value = `${productName}`
maincontainer.appendChild(productnaame);

const productbeschrijving = document.createElement('input')
productbeschrijving.value = `${productDescription}`
maincontainer.appendChild(productbeschrijving);

const productprijs = document.createElement('input')
productprijs.type = 'number';
productprijs.valueAsNumber = `${productPrice}`
maincontainer.appendChild(productprijs);
