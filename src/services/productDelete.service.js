const productDeleteModel = require('../models/productDelete.model');

const productDeleteService = async (id) => {
  const result = await productDeleteModel(id);

  if (!result || result.length === 0) {
    return { type: 404, message: 'Product not found' };
  }
  return { type: null };
};

module.exports = { productDeleteService };