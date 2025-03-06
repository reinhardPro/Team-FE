// Fetch and display product list
if (document.URL.includes("products.html")) {
fetch('http://localhost:3000/Products')
            .then(response => response.json())
            .then(products => {
                const list = document.getElementById('product-list');
                products.forEach(product => {
                    const li = document.createElement('li');
                    li.innerHTML = `<a href="productId.html?id=${product.id}">${product.name}</a>`;
                    list.appendChild(li);
                });
            })
            .catch(error => console.error('Error fetching products:', error));
        }
// Fetch and display product details
if (document.URL.includes("productId.html")) {
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');
    
            if (!id) {
                alert("You must select a product first!");
                window.location.href = "products.html";
            } else {
                fetch(`http://localhost:3000/Products/${id}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Product not found');
                        }
                        return response.json();
                    })
                    .then(product => {
                        document.getElementById('product-details').innerHTML = `
                            <h2>${product.name}</h2>
                            <p><strong>Description:</strong> ${product.description}</p>
                        `;
                    })
                    .catch(error => {
                        document.getElementById('product-details').innerHTML = 
                            `<p style="color: red;">Error: ${error.message}</p>`;
                    });
            }
        }