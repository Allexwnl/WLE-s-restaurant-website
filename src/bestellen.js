const mainContainer = document.querySelector('.maincontainer');


const items = JSON.parse(localStorage.getItem('items'));
console.log(localStorage);

for (const [index, item] of items.entries()) {
  const card = document.createElement('div');
  card.classList.add('card');
  
  const title = document.createElement('h3');
  title.textContent = item.naam;
  card.appendChild(title);
  
  const img = document.createElement('img');
  img.src = item.img;
  img.classList.add('imgpak1');
  card.appendChild(img);
  
  const description = document.createElement('p');
  description.textContent = `prijs: ${item.prijs}€`;
  description.classList.add('description');
  card.appendChild(description);

  const menuContainer = document.getElementById('menu-container2');
  menuContainer.appendChild(card);
  
  const button = document.createElement('button');
  button.classList.add('buttons');
  button.textContent = "verwijderen";
  card.appendChild(button);
  function removecart(id) {
    
    let cart = JSON.parse(localStorage.getItem("items"));
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].item === id) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("items", JSON.stringify(cart));
    if (cart.length <= 0) {
      localStorage.removeItem("items");
    }
  }
  
  button.addEventListener('click', () => {
    // Remove the card from the DOM
    card.remove();
    
    // Remove the card from the local storage
    removecart();
    
    cartCount--;
    localStorage.setItem('cartcount', cartCount);
    badge.textContent = cartCount;
    totalPriceElement.textContent = `Totaal €${calculateTotalPrice()}`;
    // Add event listener to the "Afrekenen" button
    if (totalPrice <= 0 || totalPriceElement.textContent == "Totaal €0") {
      afrekenen.disabled = true;
    }
    else {
      afrekenen.disabled = false;
    }
  });
}

const afrekenencard = document.createElement('div');
afrekenencard.classList.add('afrekenencard');
mainContainer.appendChild(afrekenencard);

// Customer page JavaScript file

// Function to calculate the total price of the items in the cart
function calculateTotalPrice() {
  let totalPrice = 0;
  const items = JSON.parse(localStorage.getItem('items'));
  
  // Controleer of items in de localStorage aanwezig zijn
  if (!items) {
    return totalPrice;  // items zijn niet aanwezig, return 0
  }
  
  for (const item of items) {
    totalPrice += item.prijs;
  }
  
  return totalPrice;
}

const vwallButton = document.createElement('button');
vwallButton.classList.add('vwall');
vwallButton.textContent = 'verwijder alles';
vwallButton.addEventListener('click', () => {
  // Remove all items from the cart and clear the local storage
  localStorage.setItem('items', JSON.stringify([]));
  const cardContainer = document.getElementById("menu-container2");
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
  localStorage.setItem('cartcount', 0);

  // Controleer of cartcount 0 is en zet totalPrice op de HTML op 0
  if (parseInt(localStorage.getItem('cartcount')) === 0) {
    const totalPriceElements = document.getElementsByClassName("totaal");
    if (totalPriceElements.length > 0) {
      totalPriceElements[0].textContent = "Totaal: €0";
    }
  }
});


mainContainer.appendChild(vwallButton);


// Function to save the order to local storage
const orders = JSON.parse(localStorage.getItem('orders')) || [];
const totalPrice = calculateTotalPrice();
// Create the "Total price" element
const totalPriceElement = document.createElement('p');
totalPriceElement.classList.add('totaal');
totalPriceElement.textContent = `Totaal: €${totalPrice}`; // set the text content of the totalPriceElement
afrekenencard.appendChild(totalPriceElement);

// Create the "Afrekenen" button
const afrekenen = document.createElement('button');
afrekenen.classList.add('afrekenen');
afrekenen.textContent = "Afrekenen";
afrekenencard.appendChild(afrekenen);

// Add event listener to the "Afrekenen" button
if (totalPrice <= 0 || totalPriceElement.textContent == "Totaal €0") {
  afrekenen.disabled = true;
}
else {
  afrekenen.disabled = false;
}


afrekenen.addEventListener('click', () => {
  alert("UW BESTELLING WORDT IN ENKELE ONGEBLIKKEN BIJ UW BEZORGT!");
  // Save the order to local storage
  saveBestelling();
  emptycard();
  
  
  
  window.location.href = "menu.html";
});



function saveBestelling() {
  const items = JSON.parse(localStorage.getItem('items'));
  const totalPrice = calculateTotalPrice();
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const id = orders.length + 1; // Use the length of the orders array as the order number
  const order = {
    id: id,
    items: items,
    time: new Date().toLocaleString(),
    totalPrice: totalPrice,
  };

  // Add the new order to the orders array
  orders.push(order);

  // Save the updated orders array to local storage
  localStorage.setItem('orders', JSON.stringify(orders));

  // Save the order number as a separate item in local storage
  localStorage.setItem('currentOrderNumber', id);
}

function emptycard() {
  const cardContainer = document.getElementById("menu-container2");
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
  localStorage.setItem('items', JSON.stringify([]));
  localStorage.setItem('cartcount', 0);
  totalPriceElement.textContent = `Totaalprijs: 0€`;

  console.log(localStorage);
}

const badge = document.getElementById("cartBadge");

let cartCount = localStorage.getItem('cartcount');
if (cartCount == 0) {
    badge.style.display = "none";
} else {
    badge.style.display = "inline-block";
    badge.innerText = cartCount;
}   