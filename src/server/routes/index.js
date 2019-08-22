var express = require('express');
var path = require('path');
var {User} = require('../models');
const jwt = require('jsonwebtoken');
const secret = require('../config/jwt');
var router = express.Router();

const generatorJWT = (payload, secret, expired) =>{
  return jwt.sign(payload,secret,{ expiresIn: expired});
}

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var appDir = process.cwd();
  res.sendFile(path.join(appDir,'dist','index.html'));
});

router.post('/logout', (req,res,next)=>{
  console.log(req.body);
  const token = req.body.token;
  try{
    let decoded=jwt.decode(token, secret.secret);
    if(decoded.ssid == req.session.id){
      console.log("TOKEN SUCCESS");
      req.session.destroy();
    }
    
  }catch(e){
    console.error(e);
  }
  res.status(200).json({status:"success"});
})

router.post('/login', (req, res, next)=>{
  console.log(req.body);
  /**
   * login logic
   * generator token
   * require jsonwebtoken
   */
  User.findOrCreate({
    where:{
      id:req.body.id,
      pw:req.body.pw,
    }
  }).spread((result,created)=>{
    if(created){
      console.log("CREATED USER");
    }
    console.log(result);
    const payload = {
      name: 'username',
      ssid: req.session.id,
      joinDate: 'yyyy/mm/dd',
      lastLogin: 'yyyy/mm/dd'
    }
    const expired = '24h';    
    const JWT = generatorJWT(payload,secret.secret, expired);
    req.session.token = JWT;    
    res.cookie('authUser',JWT);
    res.status(200).json({status:"SUCCESS",token:JWT});
    
  }).catch(err=>{
    console.error(err);
    console.log(req.body);
    res.status(500).send();
  })
  // const payload = {
  //   name: 'username',
  //   joinDate: 'yyyy/mm/dd',
  //   lastLogin: 'yyyy/mm/dd'
  // }
  // const expired = '24h';
  // try{
  //   const JWT = generatorJWT(payload,secret.secret, expired);
  //   res.status(200).json({status:"SUCCESS",token:JWT});
  // }catch(e){
  //   console.error(e);
  //   res.status(500).json({status:"FAILURE"})
  // }
  
})

module.exports = router;
