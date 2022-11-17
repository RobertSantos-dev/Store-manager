const salesAllModel = require('../models/salesAll.model');

const salesAllService = async () => {
  const result = await salesAllModel();
  // const objMessage = result.map(({ sale_id, date, product_id, quantity }) => {
  //   const obj = {
  //     saleId: sale_id, date, productId: product_id, quantity,
  //   };

  //   return obj;
  // });

  if (!result || result === undefined) return { type: 404, message: 'Error' };
  return { type: null, message: result };
};

module.exports = { salesAllService };