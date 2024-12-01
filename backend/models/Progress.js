const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  completedSections: { type: Number, default: 0 },
  totalSections: { type: Number, required: true }
});

module.exports = mongoose.model('Progress', ProgressSchema);
