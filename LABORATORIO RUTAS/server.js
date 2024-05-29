const express = require('express');
const { v4: uuidv4 } = require('uuid');
const jsonServer = require('json-server');
const bcrypt = require('bcrypt');

const app = express();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

app.use(express.json());
app.use('/api', router);

// Rutas

// Información del grupo de trabajo
app.get('/', (req, res) => {
  res.send('Información del grupo de trabajo: [Nombre del grupo, descripción, etc.]');
});

// Información de los integrantes del grupo
app.get('/integrantes', (req, res) => {
  const integrantes = router.db.get('integrantes').value();
  res.json(integrantes);
});

// Información de un integrante del grupo por ID
app.get('/integrantes/:id', (req, res) => {
  const integrante = router.db.get('integrantes').find({ id: req.params.id }).value();
  if (integrante) {
    res.json(integrante);
  } else {
    res.status(404).send('Integrante no encontrado');
  }
});

// Presentar un HTML con algunos productos
app.get('/products', (req, res) => {
  const products = router.db.get('products').value();
  let productsHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Productos</title>
    </head>
    <body>
      <h1>Productos</h1>
      <ul>
  `;

  products.forEach(product => {
    productsHtml += `<li>${product.name} - $${product.price}</li>`;
  });

  productsHtml += `
      </ul>
    </body>
    </html>
  `;

  res.send(productsHtml);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
