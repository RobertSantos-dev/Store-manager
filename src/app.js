const express = require('express');

const { productAllController } = require('./controllers/productAll.controller');
const { productIdController } = require('./controllers/productId.controller');
const { productInsertController } = require('./controllers/productInsert.controller');
const { productUpdateController } = require('./controllers/productUpdate.controller');
const { salesInsertController } = require('./controllers/salesInsert.controller');
const { salesAllController } = require('./controllers/salesAll.controller');
const { salesIdController } = require('./controllers/salesId.controller');

const {
  validationProductPost,
  validationProductPut,
} = require('./middlewares/validationProduct');

const {
  validationSalesProductIdPost,
  validationSalesQuantityPost,
} = require('./middlewares/validationSales');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productAllController);
app.get('/products/:id', productIdController);
app.get('/sales', salesAllController);
app.get('/sales/:id', salesIdController);

app.post('/products', validationProductPost, productInsertController);
app.post(
  '/sales',
  validationSalesProductIdPost,
  validationSalesQuantityPost,
  salesInsertController,
);

app.put(
  '/products/:id',
  validationProductPut,
  productUpdateController,
);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;