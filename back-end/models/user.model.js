let mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  firstName: String,
  lastName: String
})

const User = mongoose.model('User', UserSchema);
module.exports = User
