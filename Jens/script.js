document.addEventListener("DOMContentLoaded", () => {
    const currentPage = window.location.pathname;

    if (currentPage.includes("Meubellist.html")) {
        loadFurnitureList();
    } else if (currentPage.includes("item.html")) {
        loadFurnitureDetails();
    }
});

// Functie om alle meubels op te halen en weer te geven in Meubellist.html
function loadFurnitureList() {
    fetch("http://localhost:5000/api/meubels") // Verbindt met de backend API
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("furniture-list");
            list.innerHTML = ""; // Maak de lijst leeg voor het laden

            data.forEach(item => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="item.html?id=${item.id}">${item.name} - ${item.type} - $${item.price}</a>`;
                list.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
}

// Functie om een specifiek meubelstuk op te halen in item.html
function loadFurnitureDetails() {
    const params = new URLSearchParams(window.location.search);
    const itemId = params.get("id");

    if (!itemId) {
        document.getElementById("furniture-details").innerHTML = "<p>No item ID provided.</p>";
        return;
    }

    fetch(`http://localhost:5000/api/meubels/${itemId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Item not found");
            }
            return response.json();
        })
        .then(item => {
            const details = document.getElementById("furniture-details");
            details.innerHTML = `
                <h2>${item.name}</h2>
                <p>Type: ${item.type}</p>
                <p>Price: $${item.price}</p>
                <a href="Meubellist.html">Back to List</a>
            `;
        })
        .catch(error => {
            document.getElementById("furniture-details").innerHTML = `<p>${error.message}</p>`;
        });
}


