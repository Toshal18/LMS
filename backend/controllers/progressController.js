const Progress = require('../models/Progress');

exports.updateProgress = async (req, res) => {
  const { courseId, completedSections } = req.body;
  try {
    const progress = await Progress.findOneAndUpdate(
      { student: req.user.id, course: courseId },
      { completedSections },
      { new: true, upsert: true }
    );
    res.status(200).json(progress);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update progress', error });
  }
};

exports.getProgress = async (req, res) => {
  try {
    const progress = await Progress.find({ student: req.user.id }).populate('course', 'title');
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch progress', error });
  }
};
