let User = require('../models/user');
var jwt = require('jsonwebtoken');
let shortid = require('short-id');
let crypto = require('crypto');
module.exports={
  register:function(req,res){
    let salt = shortid.generate()
    User.create({
      name:req.body.name,
      email:req.body.email,
      salt:salt,
      password:crypto.createHmac('sha256', salt)
          .update(req.body.password).digest('hex')
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
    User.find({
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
