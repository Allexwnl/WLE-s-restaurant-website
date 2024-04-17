// Function to get data from local storage and parse it
function getDataFromLocalStorage(key) {
    const jsonData = localStorage.getItem(key);
    return jsonData? JSON.parse(jsonData) : null;
}

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const data = getDataFromLocalStorage('data');
let product = null;
for (const category of Object.values(data || {})) {
    for (const item of category) {
        if (item.id == productId) {
            console.log('item gevonden', item);
            product = item;
        }
    }
}

if (product) {
    console.log("Found product:", product);
} else {
    console.log("Product with ID", productId, "not found.");
}

// To debug and see all items
if (data) {
    console.log('All flattened items:', Object.values(data || {}).flat());
} else {
    console.log('Data not found in local storage.');
}


const maincontainer = document.getElementById('inputss')
const btncontainer = document.getElementById('buttons')

const productnaame = document.createElement('input')
productnaame.value = `${product?.naam || ''}`
productnaame.setAttribute('id', 'title');
maincontainer.appendChild(productnaame);

const productbeschrijving = document.createElement('input')
productbeschrijving.value = `${product?.ingrediënten || ''}`
productbeschrijving.setAttribute('id', 'description');
maincontainer.appendChild(productbeschrijving);

const productprijs = document.createElement('input')
productprijs.type = 'number';
productprijs.valueAsNumber = `${product?.prijs || 0}`
productprijs.setAttribute('id', 'prijs');
maincontainer.appendChild(productprijs);

const savechangebtn = document.createElement('button');
savechangebtn.id = 'savechangebtn'
savechangebtn.textContent = `gegevens opslaan`;
btncontainer.appendChild(savechangebtn);
savechangebtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (!product) return;
    if (!productnaame.value ||!productbeschrijving.value ||!productprijs.valueAsNumber) {
        alert('Please fill in all fields');
        return;
    }
    product.naam = productnaame.value;
    product.ingrediënten = productbeschrijving.value;
    product.prijs = productprijs.valueAsNumber;
    localStorage.setItem('data', JSON.stringify(data));
    console.log("Product updated:", product);
    window.location.href = `admin.html`
})

const anuleren = document.createElement('button')
anuleren.textContent = `anuleren`
btncontainer.appendChild(anuleren);
anuleren.addEventListener('click', function(event)  {
    event.preventDefault();
    productnaame.value = product?.naam || '';
    productbeschrijving.value = product?.ingrediënten || '';
    productprijs.valueAsNumber = product?.prijs || 0;
})