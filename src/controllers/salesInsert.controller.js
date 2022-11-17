const { salesInsertService } = require('../services/salesInsert.service');

const salesInsertController = async (req, res) => {
  const arr = req.body;
  
  const { type, message } = await salesInsertService(arr);

  if (type) return res.status(type).json({ message });
  return res.status(201).json(message);
};

module.exports = { salesInsertController };