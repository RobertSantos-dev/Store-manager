const { salesAllService } = require('../services/salesAll.service');

const salesAllController = async (_req, res) => {
  const { type, message } = await salesAllService();

  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

module.exports = { salesAllController };