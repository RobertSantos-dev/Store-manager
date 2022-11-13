const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const productAllSer = require('../../../src/services/productAll.service');
const productIdSer = require('../../../src/services/productId.service');
const productAllCon = require('../../../src/controllers/productAll.controller');
const productIdCon = require('../../../src/controllers/productId.controller');
const productAllMock = require('../utils/mocks/db.mock');

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
      .resolves({ type: null, message: productAllMock.product });

    await productAllCon.productAllController(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).not.to.have.been.calledWith(productAllMock.product);
  });

  it('02 - Testando se é retornado os status correto de uma requisição', async function () {
    const res = {};
    const req = { params: { id: 2 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productIdSer, 'productIdService')
      .resolves({ type: null, message: productAllMock.product[1] });

    await productIdCon.productIdController(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).not.to.have.been.calledWith(productAllMock.product);
  });

  it('03 - Testando se é retornado os status correto de uma requisição', async function () {
    const res = {};
    const req = { params: { id: 4 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon
      .stub(productIdSer, 'productIdService')
      .resolves({ type: 404, message: 'Product not found' });

    await productIdCon.productIdController(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.deep.calledWith({ message: 'Product not found' });
  });
});