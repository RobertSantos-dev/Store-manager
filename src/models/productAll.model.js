const { connection } = require('./connection');

const productAllModel = async () => {
  const result = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

module.exports = productAllModel;