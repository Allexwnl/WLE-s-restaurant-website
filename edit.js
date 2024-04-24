console.log('edit.js loaded');

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

let product = null;
const data = JSON.parse(localStorage.getItem('data'));

if (data) {
    for (const sectionKey of Object.keys(data)) {
        const sectionData = data[sectionKey];
        const foundProduct = sectionData.find(item => item.id == productId);
        if (foundProduct) {
            console.log('Item found:', foundProduct);
            product = foundProduct;
            break;
        }
    }
}

if (product) {
    console.log("Found product:", product);
} else {
    console.log("Product with ID", productId, "not found.");
}

// Rest of your code for editing the product...

const maincontainer = document.getElementById('inputss');
const btncontainer = document.getElementById('buttons');

const productnaame = document.createElement('input');
productnaame.value = product ? product.naam : '';
productnaame.setAttribute('id', 'title');
maincontainer.appendChild(productnaame);

const productbeschrijving = document.createElement('input');
productbeschrijving.value = product ? product.ingrediënten : '';
productbeschrijving.setAttribute('id', 'description');
maincontainer.appendChild(productbeschrijving);

const productprijs = document.createElement('input');
productprijs.type = 'number';
productprijs.value = product ? product.prijs : 0;
productprijs.setAttribute('id', 'prijs');
maincontainer.appendChild(productprijs);

const savechangebtn = document.createElement('button');
savechangebtn.id = 'savechangebtn';
savechangebtn.textContent = `gegevens opslaan`;
btncontainer.appendChild(savechangebtn);
savechangebtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!product) return;
    if (!productnaame.value || !productbeschrijving.value || !productprijs.valueAsNumber) {
        alert('Please fill in all fields');
        return;
    }
    product.naam = productnaame.value;
    product.ingrediënten = productbeschrijving.value;
    product.prijs = productprijs.valueAsNumber;
    localStorage.setItem('data', JSON.stringify(data));
    console.log("Product updated:", product);
    window.location.href = `admin.html`;
});

const anuleren = document.createElement('button');
anuleren.textContent = `anuleren`;
btncontainer.appendChild(anuleren);
anuleren.addEventListener('click', function (event) {
    event.preventDefault();
    productnaame.value = product ? product.naam : '';
    productbeschrijving.value = product ? product.ingrediënten : '';
    productprijs.value = product ? product.prijs : 0;
    window.location.href = `admin.html`;
});
