// Fetch and display fruit list
if (document.URL.includes("Fruit.html")) {
    fetch("http://localhost:3000/api/fruits")
        .then(response => response.json())
        .then(data => {
            const catList = document.getElementById("fruit-list");
            data.forEach(cat => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="details.html?id=${fruit.id}">${fruit.name} - $${fruit.color}</a>`;
                catList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching Fruits:", error));
}

// Fetch and display fruit details
if (document.URL.includes("details.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const catId = urlParams.get("name");

    fetch(`http://localhost:3000/fruits/${catId}`)
        .then(response => response.json())
        .then(fruit => {
            if (!fruit.name) {
                document.getElementById("fruit-details").innerHTML = "<p>fruit not found.</p>";
                return;
            }
            document.getElementById("fruit-details").innerHTML = `
                <h2>${fruit.name}</h2>
                <p>${fruit.color}</p>
                <p>${fruit.family}</p>
                <p>${fruit.origin}</p>
                <p>${fruit.id}</p>
            `;
        })
        .catch(error => console.error("Error fetching fruit details:", error));
}