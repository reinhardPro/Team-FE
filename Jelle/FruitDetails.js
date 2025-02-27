// Replace this with your actual API endpoint
const apiUrl = 'http://localhost:3000/api/fruits/:name'; 

// Fetch the fruit data from the API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Get the list element
        const fruitList = document.getElementById('fruit-details');

        // Loop through the data and add each fruit to the list
        data.fruits.forEach(fruit => {
            const listItem = document.createElement('li');
            listItem.textContent = fruit.name; // assuming 'name' is the key for fruit names
            fruitList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error fetching the fruit details:', error);
    });