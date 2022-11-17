const { connection } = require('./connection');

// const insert = async (retId, { productId, quantity }) => {
//   await connection.execute(
//     `
//     INSERT IGNORE INTO StoreManager.sales_products (sale_id, product_id, quantity)
//     VALUES (?, ?, ?);
//     `,
//     [retId, productId, quantity],
//   );
// };

// for (let i = 0; i < arr.length; i += 1) {
//   insert(insertId, arr[i]);
// }

const salesInsertModel = async (arr) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW());',
  );
  
  arr.forEach(async ({ productId, quantity }) => {
    await connection.execute(
      'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);',
      [insertId, productId, quantity],
    );
  });

  return { insertId };
};

module.exports = salesInsertModel;