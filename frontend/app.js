fetch('http://localhost:3000/crypto-prices')
    .then(response => response.json())
    .then(data => {
        const cryptoList = document.getElementById('crypto-list');
        cryptoList.innerHTML = '';

        data.forEach(crypto => {
            const listItem = document.createElement('li');
            listItem.textContent = `${crypto.name} (${crypto.symbol}): $${crypto.price}`;
            cryptoList.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });