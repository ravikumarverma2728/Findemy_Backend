
const mongoose = require("mongoose");
const cartSchema = mongoose.Schema(
  {
    title: {
      type: String,
      text: true,
    },
    author: {
      type: String,
      text: true,
    },
    course_id: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
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

  module.exports = cartSchema;