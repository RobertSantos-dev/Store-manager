const { connection } = require('./connection');

const productUpdateModel = async (name, id) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?;',
    [name, id],
  );

  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [id],
  );

  return result;
};

module.exports = productUpdateModel;