const { Schema, model } = require('mongoose');

const developersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  telegram: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
});

const Developers = model('Developers', developersSchema);

module.exports = Developers;
