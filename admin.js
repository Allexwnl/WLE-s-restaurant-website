// sectie steengrill
fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        data.steengril.forEach(item => {
            const card = createCard(item);
            document.getElementById('menu-container').appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching menu:', error));

    //courmet
    fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        data.courmet.forEach(item => {
            const card = createCard(item);
            document.getElementById('menu-container1').appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching menu:', error));

//voorgerechten
let counter = 0;

fetch('menu.json')
 .then(response => response.json())
 .then(data => {
    data.voorgerechten.forEach(item => {
        const card = createCard(item);
        document.getElementById('menu-container2').appendChild(card);
    });
  })
 .catch(error => console.error('Error fetching menu:', error));
//vlees
    fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        data.vlees.forEach(item => {
            const card = createCard(item);
            document.getElementById('menu-container3').appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching menu:', error));
//vis
    fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        data.vis.forEach(item => {
            const card = createCard(item);
            document.getElementById('menu-container4').appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching menu:', error));

    //bijgerechten
    fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        data.desserts.forEach(item => {
            const card = createCard(item);
            document.getElementById('menu-container5').appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching menu:', error));

    fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        data.desserts.forEach(item => {
            const card = createCard(item);
            document.getElementById('menu-container6').appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching menu:', error));

function createCard(item) {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h3');
    title.textContent = item.naam;
    title.classList.add('title');
    card.appendChild(title);

    const img = document.createElement('img');
    img.src = item.img;
    img.classList.add('imgpak1');
    card.appendChild(img);

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = item.ingrediënten;
    card.appendChild(description);

    const prijs = document.createElement('p');
    prijs.classList.add('prijs');
    prijs.textContent = `prijs: ${item.prijs}€`;
    card.appendChild(prijs);

    const button = document.createElement('button');
    button.classList.add('button2');
    button.textContent = "edit";
    card.appendChild(button);
    button.addEventListener('click', () => {
        const productnaam = item.naam;
        const description = item.ingrediënten;
        const productprijs = item.prijs;
      
        window.location.href = `edit.html?name=${encodeURIComponent(productnaam)}&beschrijving=${encodeURIComponent(description)}&prijs=${encodeURIComponent(productprijs)}`;
      });

    const button2 = document.createElement('button');
    button2.classList.add('button3');
    button2.textContent = "delete";
    card.appendChild(button2);

    return card;
}

const items = JSON.parse(localStorage.getItem('items'));