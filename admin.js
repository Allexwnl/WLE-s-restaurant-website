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

            const description = document.createElement('p');
            description.textContent = item.beschrijving;
            card.appendChild(description);

            const prijs = document.createElement('p');
            prijs.textContent = `prijs: ${item.prijs}€`
            card.appendChild(prijs);

            const button = document.createElement('button');
            button.classList.add('button2');
            button.textContent = "edit";
            card.appendChild(button);

            const button2 = document.createElement('button');
            button2.classList.add('button3');
            button2.textContent = "delete";
            card.appendChild(button2);

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

            const description = document.createElement('p');
            description.textContent = item.beschrijving;
            card.appendChild(description);

            const prijs = document.createElement('p');
            prijs.textContent = `prijs: ${item.prijs}€`
            card.appendChild(prijs);

            const button = document.createElement('button');
            button.classList.add('button2');
            button.textContent = "edit";
            card.appendChild(button);

            const button2 = document.createElement('button');
            button2.classList.add('button3');
            button2.textContent = "delete";
            card.appendChild(button2);

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

      const description = document.createElement('p');
      description.textContent = item.ingrediënten;
      card.appendChild(description);

      const prijs = document.createElement('p');
      prijs.textContent = `prijs: ${item.prijs}€`
      card.appendChild(prijs);

      const button = document.createElement('button');
      button.classList.add('button2');
      button.textContent = "edit";
      card.appendChild(button);

      const button2 = document.createElement('button');
      button2.classList.add('button3');
      button2.textContent = "delete";
      card.appendChild(button2);

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

            const description = document.createElement('p');
            description.textContent = item.ingrediënten;
            card.appendChild(description);

            const prijs = document.createElement('p');
            prijs.textContent = `prijs: ${item.prijs}€`
            card.appendChild(prijs);

            const button = document.createElement('button');
            button.classList.add('button2');
            button.textContent = "edit";
            card.appendChild(button);

            const button2 = document.createElement('button');
            button2.classList.add('button3');
            button2.textContent = "delete";
            card.appendChild(button2);

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

            const description = document.createElement('p');
            description.textContent = item.ingrediënten;
            card.appendChild(description);
            
            const prijs = document.createElement('p');
            prijs.textContent = `prijs: ${item.prijs}€`
            card.appendChild(prijs);

            const button = document.createElement('button');
            button.classList.add('button2');
            button.textContent = "edit";
            card.appendChild(button);

            const button2 = document.createElement('button');
            button2.classList.add('button3');
            button2.textContent = "delete";
            card.appendChild(button2);


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

            const description = document.createElement('p');
            description.textContent = item.ingrediënten;
            card.appendChild(description);

            const prijs = document.createElement('p');
            prijs.textContent = `prijs: ${item.prijs}€`
            card.appendChild(prijs);

            const button = document.createElement('button');
            button.classList.add('button2');
            button.textContent = "edit";
            card.appendChild(button);

            const button2 = document.createElement('button');
            button2.classList.add('button3');
            button2.textContent = "delete";
            card.appendChild(button2);

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

            const description = document.createElement('p');
            description.textContent = item.ingrediënten;
            card.appendChild(description);
            
            const prijs = document.createElement('p');
            prijs.textContent = `prijs: ${item.prijs}€`
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