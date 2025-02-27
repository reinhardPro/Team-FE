const port = process.env.PORT || 3000;

const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.set("view engine", "handlebars");

// Endpoint to get all cats Reinhard
app.get('/AllCars', (req, res) => {
    res.json(cars);
});

// Endpoint to get cat by ID Reinhard
app.get('/OneCar/:id', (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.json(car);
});




//haal alle motormerken op Logan

app.get('/api/merken', (req, res) => {
    const merken = [...new Set(motos.map(moto => moto.brand))];
    res.json(merken);
});

// Haal een specifieke motor op via ID LOgan
app.get('/api/moto/:id', (req, res) => {
    const moto = motos.find(m => m.id === parseInt(req.params.id));
    if (!moto) {
        return res.status(404).json({ error: "Motor niet gevonden" });
    }
    res.json(moto);
})





// Endpoint om alle producten op te halen Edouard
app.get('/AllProducts', (req, res) => {
    res.json(products);
});

// Endpoint om één product op te halen op basis van ID Edouard
app.get('/OneProduct/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
});



// Endpoint to get all cars Mathias
app.get('/AllCars', (req, res) => {
    res.json(cars);
});

// Endpoint to get car by ID Mathias
app.get('/OneCar/:id', (req, res) => {
    const car = cars.find(c => c.id === parseInt(req.params.id));
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.json(car);
});

// Endpoint to get all fruits Jelle
app.get('/api/fruits', (req, res) => {
    res.json({ fruits });
});
//  Endpoint to get car by ID Jelle
app.get('/api/fruits/:name', (req, res) => {
    const fruitName = req.params.name.toLowerCase(); // Get the fruit name from the URL parameter
    const fruit = fruits.find(f => f.name.toLowerCase() === fruitName);

    if (fruit) {
        res.json(fruit); // Send the fruit details as JSON
    } else {
        res.status(404).json({ message: 'Fruit not found' }); // Return a 404 error if the fruit is not found
    }
});

// Endpoint om alle meubels op te halen Jens
app.get('/api/meubels', (req, res) => {
    res.json(products);
});

// Endpoint om één product op te halen op basis van ID Jens
app.get('/Onemeubels/:id', (req, res) => {
    const meubel = meubels.find(p => p.id === parseInt(req.params.id));
    if (!meubels) return res.status(404).json({ message: "meubel not found" });
    res.json(meubel);
});

// Custom 404 page
app.use((req, res) => {
    res.render("errors/404");
});

// Custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message);
    res.render("errors/500");
});

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`));