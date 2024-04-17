// Define productId before using it
const dataMap = new Map();
const productId = 'some-id-value';

// Fetch menu data from 'menu.json' and store it in local storage
// Fetch menu data from 'menu.json' and store it in local storage
const data = getDataFromLocalStorage('data');

function loadnewlocalstorage () {
if (!data) {
    data = fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('data', JSON.stringify(data));
        return data;
    })
    .catch(error => {
        console.error('Error fetching menu data:', error);
        return null;
    });
}};

const loadDataButton = document.getElementById('loadDataButton');
loadDataButton.addEventListener('click', loadnewlocalstorage);

if (data) {
    let product;
    const dataMap = new Map();
    for (const category of Object.values(data)) {
        for (const item of category) {
            dataMap.set(item.id, item);
            if (item.id == productId) {
                console.log('item gevonden', item);
                product = item;
            }
        }
    }
} else {
    console.error('Data is null, cannot loop through it');
}

// Function to get data from local storage and parse it
function getDataFromLocalStorage(key) {
    const jsonData = localStorage.getItem(key);
    if (!jsonData) {
        return null;
    }
    return JSON.parse(jsonData);
}

// Create cards for 'steengril' section
createCards('steengril', 'menu-container');

// Create cards for 'courmet' section
createCards('courmet', 'menu-container1');

// Create cards for 'voorgerechten' section
createCards('voorgerechten', 'menu-container2');

// Create cards for 'vlees' section
createCards('vlees', 'menu-container3');

// Create cards for 'vis' section
createCards('vis', 'menu-container4');

// Create cards for 'desserts' section
createCards('desserts', 'menu-container5');

// Create cards for 'desserts' section (duplicate, can be removed)
// createCards('desserts', 'menu-container6');

// Function to create cards for a specific section
function createCards(section, containerId) {
    if (data) {
        data[section].forEach(item => {
            const card = createCard(item);
            document.getElementById(containerId).appendChild(card);
        });
    } else {
        console.error('Data is null, cannot create cards');
    }
}

// Function to create a card element
function createCard(item) {
    console.log(item);
    // Create a div element and add 'card' class
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', item.id);
    card.setAttribute('role', 'listitem');

    // Create a h3 element for the item name and add 'title' class
    const title = document.createElement('h3');
    title.textContent = item.naam;
    title.classList.add('title');
    title.setAttribute('aria-label', `Item name: ${item.naam}`);
    card.appendChild(title);

    // Create an img element and set the source to the item image
    const img = document.createElement('img');
    if (item.img) {
        img.src = item.img;
    }
    img.classList.add('imgpak1');
    card.appendChild(img);

    // Create a p element for the item ingredients and add 'description' class
    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = item.ingrediënten;
    card.appendChild(description);

    // Create a p element for the item price and add 'prijs' class
    const prijs = document.createElement('p');
    prijs.classList.add('prijs');
    prijs.textContent = `prijs: ${item.prijs}€`;
    card.appendChild(prijs);

    // Create a button element for editing the item and add 'button2' class
    const button = document.createElement('button');
    button.classList.add('button2');
    button.textContent = "edit";
    card.appendChild(button);

    // Add a click event listener to the edit button
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const productid = item.id;

        // Redirect to the edit page with the product id
        window.location.href = `edit.html?id=${encodeURIComponent(productid)}`;
    });

    // Create a button element for deleting the item and add 'button3' class
    const button2 = document.createElement('button');
    button2.classList.add('button3');
    button2.textContent = "delete";
    card.appendChild(button2);

    // Add a click event listener to the delete button
    button2.addEventListener('click', (event) => {
        event.preventDefault();
        const confirmDelete = window.confirm('Are you sure you want to delete this item?');
        if (confirmDelete) {
            // Delete the item
            if (item.id) {
                dataMap.delete(item.id);
                localStorage.setItem('data', JSON.stringify(Array.from(dataMap.values())));
                card.remove();
            }
        }
    });


    
    // Return the created card element
    return card;
}