const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CoursesSchema = new Schema(
  {
    title: {
      type: String,
      text: true,
    },
    author: {
      type: String,
      text: true,
    },
    authorImage: {
      type: String,
      text: true,
    },
    authorDescription: {
      type: String,
      text: true,
    },
    originalPrice: Number,
    discountedPrice: Number,
    numOfRatings: Number,
    numOfStudents: {
      type: String,
      text: true,
    },
    rating: Number,
    level: {
      type: String,
      text: true,
    },
    isBestSeller: {
      type: Boolean,
      text: true,
    },
    thumbnail: {
      type: String,
      text: true,
    },
    description: {
      type: String,
      text: true,
    },
    requirements: {
      type: String,
      text: true,
    },
    learningOutcomes: {
      type: [String],
      text: true,
    },
    longdescription: {
      type: String,
      text: true,
    },
    
  },
  {
    timestamps: true,
  }
);

module.exports = CoursesSchema;
