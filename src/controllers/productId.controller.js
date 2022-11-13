const { productIdService } = require('../services/productId.service');

const productIdController = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productIdService(Number(id));

  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

module.exports = { productIdController };