const mongoose = require('mongoose');

const conversationSchema = mongoose.Schema(
  {
    chatName: { type: String, trim: true, default: '' },
    isGroup: { type: Boolean, default: false },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    latestMessage: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Conversation', conversationSchema);
