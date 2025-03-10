// Haal het merk op uit de URL
const urlParams = new URLSearchParams(window.location.search);
const merk = urlParams.get("brand");

// Zet de titel
document.getElementById("merk-titel").textContent = `Motoren van ${merk}`;

// Haal de motoren op van het geselecteerde merk
fetch(`http://localhost:3000/api/motos/brand/${merk}`)
    .then(response => response.json())
    .then(motos => {
        const motoLijst = document.getElementById("moto-lijst");
        if (motos.length === 0) {
            motoLijst.innerHTML = "<p>Geen motoren gevonden voor dit merk.</p>";
            return;
        }

        motos.forEach(moto => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${moto.model} (${moto.year})</strong><br>
                Kleur: ${moto.color}<br>
                Prijs: €${moto.price}
            `;
            motoLijst.appendChild(li);
        });
    })
    .catch(error => console.error("Error fetching motos:", error));
