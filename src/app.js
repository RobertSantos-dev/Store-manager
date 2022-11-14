const express = require('express');

const { productAllController } = require('./controllers/productAll.controller');
const { productIdController } = require('./controllers/productId.controller');
const { productInsertController } = require('./controllers/productInsert.controller');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productAllController);
app.get('/products/:id', productIdController);

app.post('/products', productInsertController);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;