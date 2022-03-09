const mongoose = require('mongoose');

const messageSchema = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, trim: true },
    conversation: { type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
