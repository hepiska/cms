let Article = require('../models/article');

module.exports={
  create:function(req,res){
    //console.log(req.body.user);
    Article.create({
      title:req.body.title,
      content:req.body.content,
      createAt: new Date(),
      updateAt: new Date(),
      author:req.body.user.userid
    },
      function(err,succ){
        if (err) {
          res.send(err)
        } else {
          res.send('insertdata success')
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
  },
  view: function(req,res){
    Article.findById(req.params.id,
      function(err,data){
        if (err) {
          res.send(err)
        } else {
          res.send(data)
        }
      })
  },
  update:function(req,res){
    Article.findById(req.params.id,
      function(err,data){
        if (err) {
          res.send(err)
        } else {
          if (data.author==req.body.user.userid) {
            data.title=req.body.title||data.title,
            data.content=req.body.content||data.content,
            data.updateAt=new Date()
            data.save(function (err, data) {
                 if (err) {
                     res.status(500).send(err)
                 }
                 res.send('update success');
             });
          } else {
            res.send('user unauthorize')
          }
        }
      })
  },
  delete:function(req,res){
    Article.findById(req.params.id,
      function(err,data){
        if (err) {
          res.send(err)
        } else {
          if (data.author==req.body.user.userid) {
            Article.findOneAndRemove({
              _id: req.params.id
            },
              function(err,data){
                if (err) {
                  res.send(err);
                } else {
                  res.send('data deleted');
                }
            })
          } else {
            res.send('user unauthorize')
          }
        }
      })
  }
}
