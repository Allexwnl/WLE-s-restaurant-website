const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get('name');
const productDescription = urlParams.get('beschrijving');
const productPrice = urlParams.get('prijs');

console.log(`Product Name: ${productName}`);
console.log(`Product Description: ${productDescription}`);
console.log(`Product Price: ${productPrice}`);
const maincontainer = document.getElementById('inputss')
const btncontainer = document.getElementById('buttons')

const productnaame = document.createElement('input')
productnaame.value = `${productName}`
productnaame.setAttribute('id', 'title');
maincontainer.appendChild(productnaame);

const productbeschrijving = document.createElement('input')
productbeschrijving.value = `${productDescription}`
productbeschrijving.setAttribute('id', 'description');
maincontainer.appendChild(productbeschrijving);

const productprijs = document.createElement('input')
productprijs.type = 'number';
productprijs.valueAsNumber = `${productPrice}`
productprijs.setAttribute('id', 'prijs');
maincontainer.appendChild(productprijs);

const savechangebtn = document.createElement('button');
savechangebtn.textContent = `gegevens opslaan`;
btncontainer.appendChild(savechangebtn);

savechangebtn.addEventListener('click', function() {
    const items = {
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      prijs: document.getElementById('prijs').value
    };
  
    localStorage.setItem('items', JSON.stringify(items));
  
    window.location.href = `admin.html`;
  });
  


const anuleren = document.createElement('button')
anuleren.textContent = `anuleren`
btncontainer.appendChild(anuleren);
anuleren.addEventListener('click', function()  {
    window.location.href = `admin.html`
})

