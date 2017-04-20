let router=require('express').Router()
let userCon=require('../controllers/user');
let articleCon=require('../controllers/article');
let helper= require('../helper/auth');
require('dotenv').config()
let User=require('../models/user')
let LocalStrategy = require('passport-local').Strategy;
let crypto=require('crypto');
let jwt = require('jsonwebtoken');
var passport = require('passport');

passport.use(new LocalStrategy({
        usernameField: 'email',
        session: false
    },
    function(email, password, done) {
        User.findOne({
            email:email
        },function(err,user){
       if (err) {
         done(null,false)
       } else {
         if (user) {
           if (user.password===crypto.createHmac('sha256',user.salt)
               .update(password).digest('hex')) {
             done(null,user)
           } else {
              done(null,false)
           }
         } else {
           done(null,false)
         }
       }
        })
    }
));

router.post('/user',userCon.register)
router.get('/user',userCon.views)
router.post('/login',passport.authenticate('local',{session:false}),
function(req,res){
  let user=res.req.user;
  let token=jwt.sign({
            userid:user.id,
            name:user.name,
            email:user.email,
            facebook_id:user.facebook_id
          },process.env.RAHASIA,{ expiresIn: 60 * 60 });
  res.send(token)
})
router.post('/article',helper.auth,articleCon.create)
router.get('/article',articleCon.views)

module.exports=router;
