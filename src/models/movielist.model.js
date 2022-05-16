const { Schema, model } = require('mongoose');
const User = require('./user.model')
const schema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  username: {
    type: String,
    required: true,
    maxlength: 30,
    trim: true
  },
  name: {
    type: String,
    required: true
  },
  moviesId: {
    type: Array,
    default: []
  },
  isPrivate: {
    type: Boolean,
    required: true,
    default: true
  }
}, { timestamps: true });

module.exports = model('MovieList', schema);
