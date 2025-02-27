// Fetch en toon de lijst met motoren
if (document.URL.includes("merken.html")) {
    fetch("http://localhost:3000/motos")
        .then(response => response.json())
        .then(data => {
            const motoList = document.getElementById("moto-list");
            data.forEach(moto => {
                const li = document.createElement("li");
                li.innerHTML = `<a href="moto.html?id=${moto.id}">${moto.brand} - ${moto.model}</a>`;
                motoList.appendChild(li);
            });
        })
        .catch(error => console.error("Error fetching motos:", error));
}

// Fetch en toon de details van een specifieke motor
if (document.URL.includes("moto.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const motoId = urlParams.get("id");

    fetch(`http://localhost:3000/motos/${motoId}`)
        .then(response => response.json())
        .then(moto => {
            if (!moto.brand) {
                document.getElementById("moto-details").innerHTML = "<p>Motor niet gevonden.</p>";
                return;
            }
            document.getElementById("moto-details").innerHTML = `
                <h2>${moto.brand} ${moto.model}</h2>
                <p>${moto.description}</p>
                <p>Prijs: €${moto.price}</p>
            `;
        })
        .catch(error => console.error("Error fetching moto details:", error));
}
