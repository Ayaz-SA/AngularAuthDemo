const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const db = "mongodb+srv://aezzy:aezzy@recipeworld-6opld.mongodb.net/AngularAuth";
const User = require('../models/user');
const jwt = require('jsonwebtoken')

mongoose.connect(db, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}, err => {
    if(err){
        console.log("Error : " + err);
    } else{
        console.log("Databse connected to mongodb");
    }
})

router.get('/', (req, res) => {
    res.send('API route');
})

router.post('/register', (req, res) => {
    const userData = req.body;
    const user = new User(userData);
    user.save((error, registeredUser) => {
        if(error) {
            console.log(error);
            
        } else{
            const payload = { subject: registeredUser._id };
            const token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token});
        }
    });
})

router.post('/login', (req, res) => {
    const userData = req.body;
    User.findOne({email: userData.email}, (error, user) => {
        if(error) {
            console.log(error);
            
        } else{
            if(!user){
                res.status(401).send("Invalid email")
            } else{
                const payload = { subject: user._id };
                const token = jwt.sign(payload, 'secretKey')
                user.password !== userData.password ? res.status(401).send("Invalid password") : res.status(200).send({token});
            }
        }
    })
})

router.get('/events', (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(events)
  })

  router.get('/specials', verifyToken, (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(events)
  })

  function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
      return res.status(401).send('Unauthorized request');
    }
    const token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
      return res.status(401).send('Unauthorized request');
    }
    const payload = jwt.verify(token, 'secretKey');
    if(!payload) {
      return res.status(401).send('Unauthorized request');
    }
    req.userId = payload.subject;
    next();
  }

module.exports = router;