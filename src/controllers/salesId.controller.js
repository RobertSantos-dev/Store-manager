const { salesIdService } = require('../services/salesId.service');

const salesIdController = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesIdService(Number(id));

  if (type) return res.status(type).json({ message });
  return res.status(200).json(message);
};

module.exports = { salesIdController };