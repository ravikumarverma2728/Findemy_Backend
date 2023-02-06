const express = require("express");
const router = express.Router();
const {
  getAllCourses,
  getCourseById,
  search,
} = require("../controllers/courseController");
router.get("/search", search);
router.get("/all", getAllCourses);
router.get("/:id", getCourseById);

module.exports = router;
