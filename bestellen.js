const vwallbutton = document.createElement('button');
vwallbutton.classList.add('vwall');
vwallbutton.textContent = 'verwijder alles';
container.appendChild(vwallbutton);

const items = JSON.parse(localStorage.getItem('items'));

for (const item of items) {
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

  button.addEventListener("click", function() {
    localStorage.removeItem('items')
  });

  const menuContainer = document.getElementById('menu-container2');
  menuContainer.appendChild(card);
}