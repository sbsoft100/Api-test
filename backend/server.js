const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import cors module

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Replace this with your CoinMarketCap API key
const apiKey = 'edc36adf-cde0-4a48-9e58-dda92ff4d522';

// CoinMarketCap API URL
const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

// API parameters
const params = {
  start: 1,
  limit: 10,
  convert: 'USD',
};

// Request headers
const headers = {
  'X-CMC_PRO_API_KEY': apiKey,
  Accept: 'application/json',
};

// Create an endpoint to fetch cryptocurrency prices
app.get('/api/crypto-prices', async (req, res) => {
  try {
    const response = await axios.get(url, { headers, params });
    res.json(response.data); // Send the API response back to the frontend
  } catch (error) {
    res.status(500).json({
      error: error.response ? error.response.data : error.message,
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
