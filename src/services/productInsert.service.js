const { productInsertModel } = require('../models/productInsert.model');

const productInsertService = async (obj) => {
  const resultId = await productInsertModel(obj);

  return { type: null, message: resultId };
};

module.exports = { productInsertService };