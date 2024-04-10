function scrollToH1() {
    const h1 = document.querySelector('h1');
    h1.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function scrollToSecondH1() {
    const secondH1 = document.querySelector('section:nth-child(1) h1:nth-child(1)');
    console.log(secondH1.textContent);
    secondH1.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

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

// sectie steengrill
fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        data.steengril.forEach(item => {
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
            description.textContent = item.beschrijving;
            card.appendChild(description);

            const prijs = document.createElement('p');
            prijs.textContent = `prijs: ${item.prijs}€`
            card.appendChild(prijs);

            const button = document.createElement('button');
            button.classList.add('buttons');
            button.textContent = "reserveren";
            card.appendChild(button);

            document.getElementById('menu-container').appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching menu:', error));

    //courmet
    fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        data.courmet.forEach(item => {
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
            description.textContent = item.beschrijving;
            card.appendChild(description);

            const prijs = document.createElement('p');
            prijs.textContent = `prijs: ${item.prijs}€`
            card.appendChild(prijs);

            const button = document.createElement('button');
            button.classList.add('buttons');
            button.textContent = "reserveren";
            card.appendChild(button);

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
      description.textContent = item.ingrediënten;
      card.appendChild(description);

      const prijs = document.createElement('p');
      prijs.textContent = `prijs: ${item.prijs}€`
      card.appendChild(prijs);

      const button = document.createElement('button');
      button.classList.add('buttons');
      button.textContent = "aan bestelling toevoegen";
      card.appendChild(button);

      document.getElementById('menu-container2').appendChild(card);
      button.setAttribute("href", "bestellen.html");
      button.addEventListener("click", function() {
        let items = JSON.parse(localStorage.getItem('items')) || [];
        items.push({title: title.textContent, img: item.img, description: description.textContent, prijs: prijs.number});   
        localStorage.setItem('items', JSON.stringify(items));
      });
    });
  })
 .catch(error => console.error('Error fetching menu:', error));
//vlees
    fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        data.vlees.forEach(item => {
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
            description.textContent = item.ingrediënten;
            card.appendChild(description);

            const prijs = document.createElement('p');
            prijs.textContent = `prijs: ${item.prijs}€`
            card.appendChild(prijs);

            const button = document.createElement('button');
            button.classList.add('buttons');
            button.textContent = "aan bestelling toevoegen";
            card.appendChild(button);

            document.getElementById('menu-container3').appendChild(card);
            button.setAttribute("href", "bestellen.html");
            button.addEventListener("click", function() {
                let items = JSON.parse(localStorage.getItem('items')) || [];
                items.push({title: title.textContent, img: item.img, description: description.textContent, prijs: prijs.number});
                localStorage.setItem('items', JSON.stringify(items));
              });
        });
    })
    .catch(error => console.error('Error fetching menu:', error));
//vis
    fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        data.vis.forEach(item => {
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
            description.textContent = item.ingrediënten;
            card.appendChild(description);
            
            const prijs = document.createElement('p');
            prijs.textContent = `prijs: ${item.prijs}€`
            card.appendChild(prijs);

            const button = document.createElement('button');
            button.classList.add('buttons');
            button.textContent = "aan bestelling toevoegen";
            card.appendChild(button);


            document.getElementById('menu-container4').appendChild(card);
            button.setAttribute("href", "bestellen.html");
            button.addEventListener("click", function() {
                let items = JSON.parse(localStorage.getItem('items')) || [];
                items.push({title: title.textContent, img: item.img, description: description.textContent, prijs: prijs.number});
                localStorage.setItem('items', JSON.stringify(items));
              });
        });
    })
    .catch(error => console.error('Error fetching menu:', error));

    //bijgerechten
    fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        data.bijgerechten.forEach(item => {
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
            description.textContent = item.ingrediënten;
            card.appendChild(description);

            const prijs = document.createElement('p');
            prijs.textContent = `prijs: ${item.prijs}€`
            card.appendChild(prijs);

            const button = document.createElement('button');
            button.classList.add('buttons');
            button.textContent = "aan bestelling toevoegen";
            card.appendChild(button);

            document.getElementById('menu-container5').appendChild(card);
            button.setAttribute("href", "bestellen.html");
            button.addEventListener("click", function() {
                let items = JSON.parse(localStorage.getItem('items')) || [];
                items.push({title: title.textContent, img: item.img, description: description.textContent, prijs: prijs.number});
                localStorage.setItem('items', JSON.stringify(items));
              });
        });
    })
    .catch(error => console.error('Error fetching menu:', error));
    
    //desserts
    fetch('menu.json')
    .then(response => response.json())
    .then(data => {
        data.desserts.forEach(item => {
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
            description.textContent = item.ingrediënten;
            card.appendChild(description);
            
            const prijs = document.createElement('p');
            prijs.textContent = `prijs: ${item.prijs}€`
            card.appendChild(prijs);

            const button = document.createElement('button');
            button.classList.add('buttons');
            button.textContent = "aan bestelling toevoegen";
            card.appendChild(button);

            document.getElementById('menu-container6').appendChild(card);
            button.setAttribute("href", "bestellen.html");
            button.addEventListener("click", function() {
                let items = JSON.parse(localStorage.getItem('items')) || [];
                items.push({title: title.textContent, img: item.img, description: description.textContent, prijs: prijs.number});
                localStorage.setItem('items', JSON.stringify(items));
              });
        });
    })
    .catch(error => console.error('Error fetching menu:', error));


