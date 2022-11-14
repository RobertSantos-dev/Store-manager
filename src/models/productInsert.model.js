const { connection } = require('./connection');

const productInsertModel = async (obj) => {
  const keys = Object.keys(obj).join(', ');
  const values = Object.values(obj);
  const placeholders = Object.keys(obj).map((_key) => '?').join(', ');

  const [{ insertId }] = await connection.execute(
    `INSERT INTO StoreManager.products (${keys}) VALUES (${placeholders})`,
    [...values],
  );

  return insertId;
};

module.exports = { productInsertModel };