const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  name: String,
  logo_url: String,
  thank_you_msg: String,
  employee_list: [String],
  coupon_url: String
});

module.exports = mongoose.model('Business', businessSchema);