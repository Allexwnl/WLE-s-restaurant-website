function addItem() {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const image = document.getElementById("image").value
    const id = document.getElementById("id").value;
    const section = document.getElementById("section").value;

    if (name && description && price && id > 40) {
        const newItem = {
            id: parseInt(id),
            naam: name,
            img: image, // Add image here if needed
            ingrediënten: description,
            prijs: parseFloat(price)
        };

        // Get existing data from localStorage
        let data = localStorage.getItem("data");
        if (data) {
            // Parse existing data
            data = JSON.parse(data);
        } else {
            // Initialize data if it doesn't exist
            data = {};
        }

        // Check if the selected section exists, if not, initialize it
        if (!data[section]) {
            data[section] = [];
        }

        // Add the new item to the selected section
        data[section].push(newItem);

        // Store the updated data back in localStorage
        localStorage.setItem("data", JSON.stringify(data));

        // Clear input fields
        document.getElementById("name").value = "";
        document.getElementById("description").value = "";
        document.getElementById("price").value = "";
        document.getElementById("id").value = "";

        alert("Item added successfully!");
        window.location.href = "admin.html";

    } else {
        alert("Please fill in all fields correctly and ensure the ID is greater than 40.");
    }
}



console.log(localStorage);
loadNewLocalStorage()