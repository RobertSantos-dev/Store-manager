const validationSalesProductIdPost = (req, res, next) => {
  const arr = req.body;
  const error1 = arr.some((e) => e.productId > 3);
  const error2 = arr.some((e) => !e.productId || e.productId === undefined);

  if (error1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  if (error2) {
    return res.status(400).json({ message: '"productId" is required' });
  }

  next();
};

const validationSalesQuantityPost = (req, res, next) => {
  const arr = req.body;
  const error1 = arr.some((e) => e.quantity <= 0);
  const error2 = arr.some((e) => !e.quantity || e.quantity === undefined);

  if (error1) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
  if (error2) {
      return res.status(400).json({ message: '"quantity" is required' });
    }

  next();
};

module.exports = {
  validationSalesProductIdPost,
  validationSalesQuantityPost,
};