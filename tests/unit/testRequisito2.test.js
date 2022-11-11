const { expect } = require('chai');
const sinon = require('sinon');

const { connection } = require('../../src/models/connection');
const productAllMock = require('./models/mocks/db.model.mock');

const productAll = require('../../src/models/productAll.model');
const productId = require('../../src/models/productId.model');

describe('Testes de cobertura para a função productAll', function () {
  afterEach(sinon.restore);

  it('01 - Teste se é retornado uma lista com todos os produtos', async function () {
    // sinon.stub(connection, 'execute').resolves(productAllMock);
    const [listAll] = await productAll();
    expect(listAll).to.be.deep.equal(productAllMock);
  });
});

describe('Testes de cobertura para a função productId', function () {
  afterEach(sinon.restore);

  it('01 - Teste se é retornado uma lista com apenas um item, de acordo com o id informado ex: 1', async function () {
    const [[listId]] = await productId(1);
    expect(listId).to.be.deep.equal(productAllMock[0]);
  });

  it('02 - Teste se é retornado uma lista com apenas um item, de acordo com o id informado ex: 2', async function () {
    const [[listId]] = await productId(2);
    expect(listId).to.be.deep.equal(productAllMock[1]);
  });

  it('03 - Teste se é retornado uma lista com apenas um item, de acordo com o id informado ex: 3', async function () {
    const [[listId]] = await productId(3);
    expect(listId).to.be.deep.equal(productAllMock[2]);
  });

  it('04 - Teste se é retornado uma menssagem de erro por não encontrar nem um item', async function () {
    const [[error]] = await productId(4);
    expect(error).to.equal(undefined);
  });
});