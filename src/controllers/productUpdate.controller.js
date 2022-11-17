const { productUpdateService } = require('../services/productUpdate.service');

const productUpdateController = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const { type, message } = await productUpdateService(name, Number(id));

  if (type) return res.status(type).json({ message });
  return res.status(200).json({ id, name });
};

module.exports = { productUpdateController };