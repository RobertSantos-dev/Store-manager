const { productInsertService } = require('../services/productInsert.service');

const productInsertController = async (req, res) => {
  const obj = req.body;
  const { type, message } = await productInsertService(obj);

  if (type || type === undefined) return res.status(401).send('Error');
  return res.status(201).json({ id: message, name: obj.name });
};

module.exports = { productInsertController };