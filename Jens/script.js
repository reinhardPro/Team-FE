document.addEventListener("DOMContentLoaded", () => {
    fetch("http://localhost:3000/api/meubels")
        .then(response => response.json())
        .then(data => {
            const list = document.getElementById("furniture-list");
            data.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.name} - ${item.type} - $${item.price}`;
                list.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});

function searchItem() {
    const itemId = document.getElementById("search-id").value;
    const resultElement = document.getElementById("search-result");

    if (!itemId) {
        resultElement.textContent = "Please enter a valid ID.";
        return;
    }

    fetch(`http://localhost:3000/api/meubels/${itemId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Item not found");
            }
            return response.json();
        })
        .then(item => {
            resultElement.textContent = `${item.name} - ${item.type} - $${item.price}`;
        })
        .catch(error => {
            resultElement.textContent = error.message;
        });
}
list.html 
