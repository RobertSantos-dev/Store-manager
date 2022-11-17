const validationProductPost = (req, res, next) => {
  const { name } = req.body;

  if (!name || name === '' || name === undefined) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 6) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
};

const validationProductPut = (req, res, next) => {
  const { name } = req.body;

  if (!name || name === '' || name === undefined) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
};

module.exports = { validationProductPost, validationProductPut };