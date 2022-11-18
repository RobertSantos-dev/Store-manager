const { connection } = require('./connection');

const productDeleteModel = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [id],
  );

  await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?;',
    [id],
    );
  
  return result;
};

module.exports = productDeleteModel;