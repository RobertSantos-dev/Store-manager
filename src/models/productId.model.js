const { connection } = require('./connection');

const productId = async (id) => {
  const itemId = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );

  return itemId;
};

module.exports = productId;