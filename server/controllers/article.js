let Article = require('../models/article');

module.exports={
  create:function(req,res){
    Article.create({
      title:req.body.title,
      content:reg.body.content,
      createAt: new Date(),
      updateAt: new Date(),
      author:req.headers.user._id
    },
      function(err,succ){
        if (err) {
          res.send(err)
        } else {
          res.send('register success')
        }

      })
  },
  views:function(req,res){
    Article.find({
    },
      function(err,data){
        if (err) {
          res.send(err)
        } else {
          res.send(data)
        }

      })
  }
}
