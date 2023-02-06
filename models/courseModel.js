const { model } = require('mongoose')
const CoursesSchema = require('../schemas/courseSchema')

const Courses = model('courses', CoursesSchema)

module.exports = Courses