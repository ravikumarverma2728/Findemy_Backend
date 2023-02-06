const { model } = require("mongoose");
const cartSchema = require("../schemas/cartSchema");
const Cart = model("Cart", cartSchema);

module.exports = Cart;
