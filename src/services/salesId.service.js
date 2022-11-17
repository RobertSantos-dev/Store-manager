const salesIdModel = require('../models/salesId.model');

const salesIdService = async (id) => {
  const result = await salesIdModel(id);

  if (!result || result === undefined || result.length === 0) {
    return { type: 404, message: 'Sale not found' };
  }

  return { type: null, message: result };
};

module.exports = { salesIdService };