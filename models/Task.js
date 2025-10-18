const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['todo', 'in-progress', 'done'],
    default: 'todo',
  },
  assignedTo: {
    type: String,
    default: '',
  },
  dueDate: {
    type: Date,
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);