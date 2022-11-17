const productUpdateModel = require('../models/productUpdate.model');

const productUpdateService = async (name, id) => {
  const result = await productUpdateModel(name, id);

  if (!result || result === undefined || result.length === 0) {
    return { type: 404, message: 'Product not found' };
  }

  return { type: null, message: name };
};

module.exports = { productUpdateService };