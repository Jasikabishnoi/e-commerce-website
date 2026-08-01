const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

app.get('/api/products', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Classic Shirt',
      price: 29.99,
      image: 'https://via.placeholder.com/300',
      category: 'Menswear'
    },
    {
      id: 2,
      name: 'Modern Jacket',
      price: 89.99,
      image: 'https://via.placeholder.com/300',
      category: 'Outerwear'
    }
  ]);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
  });
}

module.exports = app;
