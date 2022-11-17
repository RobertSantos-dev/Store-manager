const salesInsertModel = require('../models/salesInsert.model');

const salesInsertService = async (arr) => {
  const { insertId } = await salesInsertModel(arr);
  const message = { id: insertId, itemsSold: arr };

  if (!insertId || insertId === undefined) return { type: 404, message: 'Product not found' };
  return { type: null, message };
};

module.exports = { salesInsertService };