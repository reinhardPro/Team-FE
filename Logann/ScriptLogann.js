// Fetch en toon de lijst met motoren
fetch("http://localhost:3000/api/merken")
    .then(response => response.json())
    .then(merken => {
        const merkenLijst = document.getElementById("merkenlijst");
        merken.forEach(merk => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="merk.html?brand=${merk}">${merk}</a>`;
            merkenLijst.appendChild(li);
        });
    })
    .catch(error => console.error("Error fetching merken:", error));



// Haal alle motoren op van een specifiek merk
app.get('/api/motos/brand/:brand', (req, res) => {
    const brand = req.params.brand;
    const filteredMotos = motos.filter(moto => moto.brand === brand);
    res.json(filteredMotos);
});

