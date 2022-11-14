const { expect } = require('chai');
const sinon = require('sinon');

const conn = require('../../../src/models/connection');
const { product, newProduct } = require('../utils/mocks/db.mock');

const { productAllService } = require('../../../src/services/productAll.service');
const { productIdService } = require('../../../src/services/productId.service');
const { productInsertService } = require('../../../src/services/productInsert.service');

describe('Testes de cobertura das funções productAll e productId em Services', function () {
  afterEach(sinon.restore);

  it('01 - Teste se é retornado um objeto contendo os valores corretos da função productAllService', async function () {
    sinon.stub(conn.connection, 'execute').resolves([product]);
    const obj = await productAllService();

    expect(obj.type).to.equal(null);
    expect(obj.message).to.be.deep.equal(product);
  });

  it('02 - Teste se é retornado um objeto contendo os valores corretos da função productIdService', async function () {
    sinon.stub(conn.connection, 'execute').resolves([[product[4]]]);
    const obj = await productIdService(4);

    expect(obj.type).to.equal(404);
    expect(obj.message).to.equal('Product not found');
  });

  it('03 - Teste se é retornado um objeto contendo os valores corretos da função productIdService', async function () {
    sinon.stub(conn.connection, 'execute').resolves([[product[1]]]);
    const obj = await productIdService(2);

    expect(obj.type).to.equal(null);
    expect(obj.message).to.be.deep.equal(product[1]);
  });
});

describe('Testes de cobertura da função productInsert em Services', function () {
  it('01 - Testando se é retornado o objeto correto', async function () {
    sinon.stub(conn.connection, 'execute').resolves([{ insertId: 4 }]);
    const result = await productInsertService(newProduct);

    expect(result.type).to.equal(null);
    expect(result.message).to.be.deep.equal(4);
  });
});