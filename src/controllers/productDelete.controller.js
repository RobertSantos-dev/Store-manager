const { productDeleteService } = require('../services/productDelete.service');

const productDeleteController = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productDeleteService(Number(id));

  if (type) return res.status(type).json({ message });
  return res.status(204).end();
};

module.exports = { productDeleteController };