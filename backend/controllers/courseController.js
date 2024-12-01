const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  const { title, description } = req.body;
  try {
    const course = await Course.create({ title, description, instructor: req.user.id });
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: 'Course creation failed', error });
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'name');
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Fetching courses failed', error });
  }
};