const { expect } = require('chai');

const { productAllService } = require('../../../src/services/productAll.service');
const { productIdService } = require('../../../src/services/productId.service');
const { product } = require('../utils/mocks/db.mock');

describe('Testes de cobertura das funções productAll e productId em Services', function () {
  it('01 - Teste se é retornado um objeto contendo os valores corretos da função productAllService', async function () {
    const obj = await productAllService();
    
    expect(obj.type).to.equal(null);
    expect(obj.message).to.be.deep.equal(product);
  });

  it('02 - Teste se é retornado um objeto contendo os valores corretos da função productIdService', async function () {
    const obj = await productIdService(4);

    expect(obj.type).to.equal(404);
    expect(obj.message).to.equal('Product not found');
  });

  it('03 - Teste se é retornado um objeto contendo os valores corretos da função productIdService', async function () {
    const obj = await productIdService(2);

    expect(obj.type).to.equal(null);
    expect(obj.message).to.be.deep.equal(product[1]);
  });
});