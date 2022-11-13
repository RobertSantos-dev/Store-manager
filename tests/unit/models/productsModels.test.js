const { expect } = require('chai');
const sinon = require('sinon');

const conn = require('../../../src/models/connection');
const productAllMock = require('../utils/mocks/db.mock');

const productAll = require('../../../src/models/productAll.model');
const productId = require('../../../src/models/productId.model');

describe('Testes de cobertura das funções productAll e productId em Models', function () {
  afterEach(sinon.restore);

  it('01 - Teste se é retornado uma lista com todos os produtos', async function () {
    sinon.stub(conn.connection, 'execute').resolves([productAllMock.product]);
    const [listAll] = await productAll();
    expect(listAll).to.be.deep.equal(productAllMock.product);
  });

  it('02 - Teste se é retornado uma lista com apenas um item, de acordo com o id informado ex: 1', async function () {
    sinon.stub(conn.connection, 'execute').resolves([productAllMock.product]);
    const [[listId]] = await productId(1);
    expect(listId).to.be.deep.equal(productAllMock.product[0]);
  });

  it('03 - Teste se é retornado uma lista com apenas um item, de acordo com o id informado ex: 2', async function () {
    sinon.stub(conn.connection, 'execute').resolves([[productAllMock.product[1]]]);
    const [[listId]] = await productId(2);
    expect(listId).to.be.deep.equal(productAllMock.product[1]);
  });

  it('04 - Teste se é retornado uma lista com apenas um item, de acordo com o id informado ex: 3', async function () {
    sinon.stub(conn.connection, 'execute').resolves([[productAllMock.product[2]]]);
    const [[listId]] = await productId(3);
    expect(listId).to.be.deep.equal(productAllMock.product[2]);
  });
});
