const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().min(2).max(200).required(),
  description: Joi.string().min(5).required(),
  price: Joi.number().precision(2).min(0).required(),
  sku: Joi.string().alphanum().min(3).max(50).required(),
  category: Joi.string().required(),
  stock: Joi.number().integer().min(0).required(),
  supplier: Joi.string().required(),
  createdAt: Joi.date()
});

function validateBody(req, res, next) {
  const { error } = productSchema.validate(req.body, { abortEarly: false });
  if (error) return res.status(400).json({ errors: error.details.map(d => d.message) });
  next();
}

module.exports = { validateBody };
