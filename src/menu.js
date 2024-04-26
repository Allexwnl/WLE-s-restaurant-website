let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let data; // Initialize data variable

// Fetch menu data from local storage
const localStorageData = localStorage.getItem('data');

// Parse the menu data from local storage if it exists
if (localStorageData) {
    data = JSON.parse(localStorageData);
}

// Function to load menu data from 'menu.json' and store it in local storage
function loadNewLocalStorage() {
    if (!data) {
        fetch('menu.json')
            .then(response => response.json())
            .then(menuData => {
                data = menuData;
                localStorage.setItem('data', JSON.stringify(data));
                createCards(); // Call createCards function once data is loaded
            })
            .catch(error => {
                console.error('Error fetching menu data:', error);
            });
    } else {
        createCards(); // Call createCards function if data is already loaded from local storage
    }
}

// Function to create cards for a specific section
function createCards() {
    // Define sections and their corresponding container IDs
    const sections = [
        { section: 'steengril', containerId: 'menu-container' },
        { section: 'courmet', containerId: 'menu-container1' },
        { section: 'desserts', containerId: 'menu-container2' },
        {section: 'bijgerechten', containerId: 'menu-container3'},
        {section: 'vis', containerId: 'menu-container4'},
        { section: 'vlees', containerId: 'menu-container5' },
        { section: 'voorgerechten', containerId: 'menu-container6' },
    ];

    sections.forEach(sectionInfo => {
        const section = sectionInfo.section;
        const containerId = sectionInfo.containerId;

        if (data[section]) {
            const cards = data[section].map(item => createCard(item));
            const container = document.getElementById(containerId);
            cards.forEach(card => container.appendChild(card));
        } else {
            console.error(`Data for section '${section}' is missing`);
        }
    });
}

// Function to create a card element
function createCard(item) {
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

    const button = document.createElement('button');
    button.classList.add('buttons');
    button.textContent = "aan bestelling toevoegen";
    card.appendChild(button);


    const badge = document.getElementById("cartBadge");

    let cartCount = localStorage.getItem('cartcount');
    if (cartCount == 0) {
        badge.style.display = "none";
    } else {
        badge.style.display = "inline-block";
        badge.innerText = cartCount;
    }
    
    button.addEventListener("click", function() {
        addToCart(item);
        cartCount = parseInt(localStorage.getItem('cartcount'), 10) || 0; // retrieve and parse the current cart count
        cartCount++; // increment the cart count
        localStorage.setItem('cartcount', cartCount); // update local storage
        badge.style.display = "inline-block";
        badge.innerText = cartCount;

        setTimeout(function() {
            notification.style.display = "none";
        }, 3000);
    });


    // Return the created card element
    return card;
}


function addToCart(item) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
}


loadNewLocalStorage()