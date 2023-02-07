const express = require("express");
const router = express.Router();
const {addCourseToCart,getUserCartCourses,deleteCartCourse} = require("../controllers/cartController");
const { authorize } = require("../middlewares/authMiddleware");

router.post("/add", authorize, addCourseToCart);
router.get("/user/:user_id",authorize,  getUserCartCourses);
router.delete("/:id", authorize, deleteCartCourse);

module.exports = router;