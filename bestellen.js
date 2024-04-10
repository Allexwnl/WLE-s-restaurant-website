const mainContainer = document.querySelector('.maincontainer');
const vwallButton = document.createElement('button');
vwallButton.classList.add('vwall');
vwallButton.textContent = 'verwijder alles';
vwallButton.addEventListener('click', () => {
  localStorage.setItem('items', JSON.stringify([]));
  const cardContainer = document.getElementById("menu-container2");
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
});
mainContainer.appendChild(vwallButton);

const items = JSON.parse(localStorage.getItem('items'));

for (const [index, item] of items.entries()) {
    const card = document.createElement('div');
    card.classList.add('card');
    

    const title = document.createElement('h3');
    title.textContent = item.title;
    card.appendChild(title);

    const img = document.createElement('img');
    img.src = item.img;
    img.classList.add('imgpak1');
    card.appendChild(img);

    const description = document.createElement('p');
    description.textContent = item.description;
    description.classList.add('description');
    card.appendChild(description);

    const button = document.createElement('button');
    button.classList.add('buttons');
    button.textContent = "verwijderen";
    card.appendChild(button);
    button.addEventListener('click', () => {
        // Remove the card from the DOM
        card.remove();
        
        // Remove the card data from localStorage
        items.splice(index, 1); // Remove the item from the items array
        localStorage.setItem('items', JSON.stringify(items));
    });

    const menuContainer = document.getElementById('menu-container2');
    menuContainer.appendChild(card);
}



console.log(localStorage);