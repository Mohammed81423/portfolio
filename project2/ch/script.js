// Example of fetching data from a JSON file
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const productsSection = document.querySelector('.products');
        data.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span>${product.price}</span>
            `;
            productsSection.appendChild(productCard);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
