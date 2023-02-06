const { default: mongoose } = require("mongoose");
const Courses = require("../models/courseModel");

const getAllCourses = async (req, res) => {
  // return all available courses
  const courses = await Courses.find({});

  res.send(courses);
};

const getCourseById = async (req, res) => {
  const slug = req.params.id;

  const result = await Courses.findOne({ _id: mongoose.Types.ObjectId(slug) });

  res.send(result);
};

const search = async (req, res) => {
  
  try {
    const search = req.query.q;
    const levels = req.query.levels?.split(',') ?? ['Beginner', 'All Levels', 'Intermediate', 'Expert'];

    const courses = await Courses.find({
      title: {
        $regex: search,
        $options: "i",
      },
      level:{
        $in: levels
      }
    });

    res.send(courses);
  } catch (error) {}
};

module.exports = { getAllCourses, getCourseById, search };
