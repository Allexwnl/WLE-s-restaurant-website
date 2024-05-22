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
        { section: 'bijgerechten', containerId: 'menu-container3'},
        { section: 'vis', containerId: 'menu-container4'},
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
    img.src = item.img;
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
        const productId = item.id; // Use item.id instead of data.id

        // Redirect to the edit page with the product id
        window.location.href = `edit.html?id=${encodeURIComponent(productId)}`;
    });

    // Create a button element for deleting the item and add 'button3' class
    const button2 = document.createElement('button');
    button2.classList.add('button3');
    button2.dataset.id = item.id;
    button2.textContent = "delete";
    card.appendChild(button2);

    // Add a click event listener to the delete button
    button2.addEventListener('click', (event) => {
        event.preventDefault();
        deleteItem(event.target.dataset.id, card);
    });

    // Return the created card element
    return card;
}

// Function to delete an item
function deleteItem(productId, card) {
    const data = JSON.parse(localStorage.getItem('data'));

    if (!data || typeof data !== 'object') {
        console.error('Invalid data in local storage');
        return;
    }

    for (const sectionKey of Object.keys(data)) {
        const sectionData = data[sectionKey];
        const index = sectionData.findIndex(data => {
            console.log('data.id type', typeof data.id);
            console.log('productId type', typeof productId);
            return data.id === Number(productId)
        });
        console.log(sectionKey);
        console.log(sectionData);
        console.log(index);

        if (index > -1) {
            console.log('Product found for deletion:', productId);
            console.log('Section:', sectionKey);
            console.log('Index:', index);
            
            sectionData.splice(index, 1);
            localStorage.setItem('data', JSON.stringify(data));
            
            console.log(data);


                card.remove(productId);
                return;
        }
    }
    console.log(productId);
}

function reset() {
    localStorage.clear() 
    location.reload()
}

// Event listener for loading new data
loadNewLocalStorage()
console.log(localStorage);