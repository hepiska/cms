var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let articleSchema = new Schema({
   "title":{
     type:String,
     required: [true,'title must provided']
   },
   "content":{
     type:String,
     required: [true,'content must provided']
   },
   "createAt":Date,
   "updateAt":Date,
   "author":{ type: Schema.Types.ObjectId, ref: 'User'}
});
var Article = mongoose.model('Article', articleSchema);
module.exports = Article;
