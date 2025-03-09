// Fetch and display car list
if (document.URL.includes("cars.html")) {
    fetch("http://localhost:3000/api/cats")
        .then(response => response.json())
        .then(data => {
            const catList = document.getElementById("car-list");
            data.forEach(cat => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="details.html?id=${cat.id}">${cat.name} - $${cat.price}</a>`;
                catList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching cats:", error));
}

// Fetch and display cat details
if (document.URL.includes("details.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const catId = urlParams.get("id");

    fetch(`http://localhost:3000/AllCats/${catId}`)
        .then(response => response.json())
        .then(car => {
            if (!cat.name) {
                document.getElementById("cat-details").innerHTML = "<p>Cat not found.</p>";
                return;
            }
            document.getElementById("cat-details").innerHTML = `
                <h2>${cat.name}</h2>
                <p>${cat.breed}</p>
                <p>${cat.age}</p>
                <p>${cat.color}</p>
                <p>${cat.favoriteFood}</p>
                <p>${cat.adopted}</p>
            `;
        })
        .catch(error => console.error("Error fetching cat details:", error));
}