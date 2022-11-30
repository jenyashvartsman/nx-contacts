import * as Joi from 'joi';

export const contactValidation = Joi.object({
  id: Joi.string().optional(),
  name: Joi.string().min(3).max(255).required(),
  avatar: Joi.string().max(255).required(),
  phone: Joi.string().min(6).max(20).required(),
  email: Joi.string().max(255).email(),
  address: Joi.object({
    street: Joi.string().min(3).max(255),
    city: Joi.string().min(3).max(255),
    country: Joi.string().min(3).max(255),
  }),
});
