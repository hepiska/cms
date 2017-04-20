var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let userSchema = new Schema({
   "name":{
     type:String,
     required: [true,'owner must provided']
   },
   "email":{
     type:String,
     required: [true,'email owner must provided']
   },
   "password":{
     type:String,
     required: [true,'password must provided']
   },
    "salt":String
});
var User = mongoose.model('User', userSchema);
module.exports = User;
