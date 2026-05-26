const Joi = require('joi');

const orderSchema = Joi.object({
  orderId: Joi.string().alphanum().min(3).max(100).required(),
  product: Joi.string().required(),
  quantity: Joi.number().integer().min(1).required(),
  total: Joi.number().precision(2).min(0).required(),
  customerName: Joi.string().min(2).required(),
  address: Joi.string().min(5).required(),
  status: Joi.string().valid('pending','processing','shipped','delivered','cancelled'),
  createdAt: Joi.date()
});

function validateBody(req, res, next) {
  const { error } = orderSchema.validate(req.body, { abortEarly: false });
  if (error) return res.status(400).json({ errors: error.details.map(d => d.message) });
  next();
}

module.exports = { validateBody };
