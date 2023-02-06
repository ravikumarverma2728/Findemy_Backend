const asyncHandler = require("express-async-handler");
const Cart = require("../models/cartModel");

const User = require("../models/userModel");

const addCourseToCart = asyncHandler(async (req, res) => {
  try {
    console.log(req.body);

    //checking if course is already exist in cart
    const { course_id, user_id } = req.body;

    const courseExistInCart = await Cart.find({ course_id, user_id });

    if (courseExistInCart.length !== 0) {
      return res
        .status(400)
        .json({ success: false, message: "Course already exist in cart!" });
    }

    //adding course to cart
    const cartCourse = new Cart({
      ...req.body,
    });
    cartCourse.save();
    res.status(201).json({ success: true, cartCourse });
  } catch (error) {
    res.status(409).json({ success: false, message: error });
  }
});

// @desc Get cart Course data of a user
// @route GET /cart/user/:id
// @access Private
const getUserCartCourses = asyncHandler(async (req, res) => {
  try {
    //checking if user exist
    const user_id = req.params.user_id;
    const user = await User.findById({ _id: user_id });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not Found" });
    }

    //getting all cart courses of a user
    const cartCourse = await Cart.find({ user_id });
    if (!cartCourse) {
      return res
        .status(404)
        .json({ success: false, message: "cart course not found!" });
    }
    res.status(200).json({ success: true, cartCourse });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

// @desc Delete cart course
// @route DELETE /cart/:id
// @access Private
const deleteCartCourse = asyncHandler(async (req, res) => {
  try {
    const _id = req.params.id;
    const cartCourse = await Cart.findOneAndDelete({
      _id,
      user_id: req.body.user_id,
    });
    if (!cartCourse) {
      return res
        .status(404)
        .json({ success: false, message: "Course not found in the cart!" });
    }
    res.status(200).json({
      success: true,
      cartCourse,
      message: "Course succesfully removed form the cart!",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
});

module.exports = {
  addCourseToCart,
  getUserCartCourses,
  deleteCartCourse,
};
