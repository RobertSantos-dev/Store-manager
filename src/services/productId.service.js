const productIdModel = require('../models/productId.model');

const productIdService = async (id) => {
  const [[itemId]] = await productIdModel(id);

  if (!itemId) return { type: 404, message: 'Product not found' };
  return { type: null, message: itemId };
};

module.exports = { productIdService };