const camelize = require('camelize');
const { connection } = require('./connection');

const salesAllModel = async () => {
  const [result] = await connection.execute(
    `
    SELECT 
      sp.sale_id, s.date, sp.product_id, sp.quantity
    FROM
      StoreManager.sales_products AS sp
        INNER JOIN
      StoreManager.sales AS s ON sp.sale_id = s.id
    ORDER BY sp.sale_id ASC , sp.product_id ASC;
    `,
  );

  return camelize(result);
};

module.exports = salesAllModel;