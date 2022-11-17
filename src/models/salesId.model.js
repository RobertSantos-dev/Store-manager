const camelize = require('camelize');
const { connection } = require('./connection');

const salesIdModel = async (id) => {
  const [result] = await connection.execute(
    `
    SELECT 
      sp.sale_id, s.date, sp.product_id, sp.quantity
    FROM
      StoreManager.sales_products AS sp
        INNER JOIN
      StoreManager.sales AS s ON sp.sale_id = s.id
    WHERE
      sp.sale_id = ?
    ORDER BY sp.sale_id ASC , sp.product_id ASC;
    `,
    [id],
  );

  result.forEach((e) => delete e.sale_id);
  return camelize(result);
};

module.exports = salesIdModel;