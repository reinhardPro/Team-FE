// Fetch and display car list
if (document.URL.includes("cars.html")) {
    fetch("http://localhost:3000/api/cars")
        .then(response => response.json())
        .then(data => {
            const carList = document.getElementById("car-list");
            data.forEach(car => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="details.html?id=${car.id}">${car.name} - $${car.price}</a>`;
                carList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching cars:", error));
}

// Fetch and display car details
if (document.URL.includes("details.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get("id");

    fetch(`http://localhost:3000/api/cars/${carId}`)
        .then(response => response.json())
        .then(car => {
            if (!car.name) {
                document.getElementById("car-details").innerHTML = "<p>Car not found.</p>";
                return;
            }
            document.getElementById("car-details").innerHTML = `
                <h2>${car.name}</h2>
                <p>${car.description}</p>
                <p>Price: $${car.price}</p>
            `;
        })
        .catch(error => console.error("Error fetching car details:", error));
}
