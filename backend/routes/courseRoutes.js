const express = require('express');
const { createCourse, getCourses } = require('../controllers/courseController');
const upload = require('../middleware/uploadMiddleware');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', protect, createCourse);
router.get('/', protect, getCourses);
router.post('/upload', protect, upload.single('file'), (req, res) => {
  res.status(200).json({ filePath: req.file.path });
});

module.exports = router;
