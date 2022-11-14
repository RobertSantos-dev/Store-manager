const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const conn = require('../../../src/models/connection');
const { product, newProduct } = require('../utils/mocks/db.mock');

const productAll = require('../../../src/models/productAll.model');
const productId = require('../../../src/models/productId.model');
const { productInsertModel } = require('../../../src/models/productInsert.model');

const { expect } = chai;
chai.use(sinonChai);

// Tests
describe('Testes de cobertura das funções productAll e productId em Models', function () {
  afterEach(sinon.restore);

  it('01 - Teste se é retornado uma lista com todos os produtos', async function () {
    sinon.stub(conn.connection, 'execute').resolves([product]);
    const [listAll] = await productAll();
    expect(listAll).to.be.deep.equal(product);
  });

  it('02 - Teste se é retornado uma lista com apenas um item, de acordo com o id informado ex: 1', async function () {
    sinon.stub(conn.connection, 'execute').resolves([product]);
    const [[listId]] = await productId(1);
    expect(listId).to.be.deep.equal(product[0]);
  });

  it('03 - Teste se é retornado uma lista com apenas um item, de acordo com o id informado ex: 2', async function () {
    sinon.stub(conn.connection, 'execute').resolves([[product[1]]]);
    const [[listId]] = await productId(2);
    expect(listId).to.be.deep.equal(product[1]);
  });

  it('04 - Teste se é retornado uma lista com apenas um item, de acordo com o id informado ex: 3', async function () {
    sinon.stub(conn.connection, 'execute').resolves([[product[2]]]);
    const [[listId]] = await productId(3);
    expect(listId).to.be.deep.equal(product[2]);
  });
});

describe('Testes de cobertura da função productInsert em Models', function () {
  
  it('01 - Testando se é retornado o id correto', async function () {
    sinon.stub(conn.connection, 'execute').resolves([{ insertId: 4 }]);
    const insertId = await productInsertModel(newProduct);

    expect(insertId).to.equal(4);
  });

  afterEach(sinon.restore);
});
