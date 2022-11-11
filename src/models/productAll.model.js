const { connection } = require('./connection');

const productAll = async () => {
  const result = await connection.execute('SELECT * FROM StoreManager.products');
  return result;
};

module.exports = productAll;