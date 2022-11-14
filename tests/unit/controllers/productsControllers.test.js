const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { product, newProduct } = require('../utils/mocks/db.mock');

const productAllSer = require('../../../src/services/productAll.service');
const productIdSer = require('../../../src/services/productId.service');
const productInseSer = require('../../../src/services/productInsert.service');
const { productAllController } = require('../../../src/controllers/productAll.controller');
const { productIdController } = require('../../../src/controllers/productId.controller');
const { productInsertController } = require('../../../src/controllers/productInsert.controller');

const { expect } = chai;
chai.use(sinonChai);

describe('Testes de cobertura das funções productAll e productId em Controllers', function () {
  afterEach(sinon.restore);

  it('01 - Testando se é retornado os status correto de uma requisição', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productAllSer, 'productAllService')
      .resolves({ type: null, message: product });

    await productAllController(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).not.to.have.been.calledWith(product);
  });

  it('02 - Testando se é retornado os status correto de uma requisição', async function () {
    const res = {};
    const req = { params: { id: 2 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    
    sinon.stub(productIdSer, 'productIdService').resolves({ type: null, message: product[1] });

    await productIdController(req, res);

    // expect(res.status).to.have.been.calledWith(200);
    expect(res.json).not.to.have.been.calledWith(product);
  });

  it('03 - Testando se é retornado os status correto de uma requisição', async function () {
    const res = {};
    const req = { params: { id: 100 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productIdSer, 'productIdService')
      .resolves({ type: 404, message: 'Product not found' });

    await productIdController(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

});

describe('Testes de cobertura da função productInsert em Controllers', function () {
  afterEach(sinon.restore);

  it('Testando se é retornado os status correto da requisição', async function () {
    const res = {};
    const req = { body: newProduct };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productInseSer, 'productInsertService')
      .resolves({ type: null, message: 4 });
    
    await productInsertController(req, res);
    
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).not.to.have.been.calledWith({ ...newProduct });
  });
});