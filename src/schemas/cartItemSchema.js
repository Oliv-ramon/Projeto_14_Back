import joi from "joi";

const cartItemSchema = joi.object(
  {
    sku: joi.string().email().required(),
    category: joi.string().required(),
    description: joi.string().required(),
    image: joi.string().required(),
    size: joi.string().uppercase().max(2).required(),
    price: joi.number().required(),
  }
)

export default cartItemSchema;