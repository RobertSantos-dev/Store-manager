const express = require('express');

const productAll = require('./models/productAll.model');
const productId = require('./models/productId.model');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', async (_req, res) => {
  const [listAll] = await productAll();

  res.status(200).json(listAll);
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const [[listId]] = await productId(Number(id));

  if (!listId) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.status(200).json(listId);
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;