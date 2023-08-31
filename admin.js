const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  id: Number,
  name: String,
  username: String,
  email: String,

  address: Object,
  phone: String,
  website: String,

  company: Object
});

module.exports = mongoose.model('admin-details', adminSchema);
