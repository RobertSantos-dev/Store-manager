const { productAllService } = require('../services/productAll.service');

const productAllController = async (_req, res) => {
  const { message } = await productAllService();

  res.status(200).json(message);
};

module.exports = { productAllController };