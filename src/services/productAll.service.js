const productAllModel = require('../models/productAll.model');

const productAllService = async () => {
  const [listAll] = await productAllModel();
  return { type: null, message: listAll };
};

module.exports = { productAllService };