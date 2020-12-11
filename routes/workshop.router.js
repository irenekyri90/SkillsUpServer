const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {isLoggedIn} = require("./../helpers/middlewares");
const User = require("./../models/user.model");

const Workshop = require('../models/workshop.model');

//POST 'api/workshops'  => to post a new workshop

router.post('/workshops', isLoggedIn, (req, res, next) => {
  const { title, img, description, category, date, length, credits, maxParticipants, location}= req.body;
  //const userId = req.session.currentUser._id;
  const userId = req.body.userId;
  console.log(title);

  Workshop.create({
    title,
    img,
    description,
    category,
    date,
    length,
    credits,
    maxParticipants,
    location,
    participants: [],
    host: userId
  })
  .then((createdWorkshop) => {
    
    
    User.findByIdAndUpdate(userId, { $inc: {wallet: createdWorkshop.credits*2}, $push: {hostedWorkshops: createdWorkshop._id}}, {new:true})
        .then((updatedUser) => {
          res.status(200).send("User updated succesfully.");
        })
        .catch((err) =>  next(err))


  })
  .catch((err) => {
    next(err)
  });
});




//POST 'api/workshops'  => to post a new workshop

// router.post('/workshops', (req, res, next) => {
//   const { title, img, description, category, date, length, credits, maxParticipants, location} = req.body;
//  //const { _id } = req.session.currentUser;
//   const {_id} = req.body;
//   console.log(title);

//   Workshop.create({
//     title,
//     img,
//     description,
//     category,
//     date,
//     length,
//     credits,
//     maxParticipants,
//     location,
//     participants: [],
//     host: _id
//   })
//   .then((createdWorkshop) => {
//     res.status(201).json(createdWorkshop);
//   })
//   .catch((err) => {
//     res
//       .status(400)
//   });
// });










// GET '/api/workshops/:category  => returns results by category

router.get('/workshops/category/:category', (req, res, next) => {
  const {category} = req.params;
  Workshop.find({category})
  .then((foundWorkshops) => {
    res.status(200).json(foundWorkshops);
  })
  .catch((err) => {
    res
      .status(400)
  });
});

// GET '/api/workshops/:id  => returns details page

router.get('/workshops/:id', (req, res) => {
  const {id} = req.params;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400) //  Bad Request
      .json({ message: "Specified id is not valid" });
    return;
  }

  Workshop.findById(id)
    .then((foundWorkshop) => {
      
      res.status(200).json(foundWorkshop);
    })
    .catch((err) => {
      res.status(500).json(err);
    })
})

// PUT '/api/workshops/:id  => make changes to workshop

router.put('/workshops/:id', (req, res, next) => {
  const { id } = req.params;
  const { title, img, description, category, date, length, credits, maxParticipants, location} = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400) //  Bad Request
      .json({ message: "Specified id is not valid" });
    return;
  }

  Workshop.findByIdAndUpdate(id, { title, img, description, category, date, length, credits, maxParticipants, location} )
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// DELETE '/api/workshops/:id  => make changes to workshop

router.delete('/workshops/:id', (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400) //  Bad Request
      .json({ message: "Specified id is not valid" });
    return;
  }

  Workshop.findByIdAndRemove(id)
    .then(() => {
      res.status(202)
      .send(`Document ${id} was removed successfully.`);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});




router.post('/workshops/signup/:id', (req,res,next)  => {
  const { id } = req.params;
  const {userId} = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400) //  Bad Request
      .json({ message: "Specified id is not valid" });
    return;
  }

  Workshop.findByIdAndUpdate(id, {$push: {participants: userId }}, {new: true})
    .then((updatedWorkshop) => {
      const {credits} = updatedWorkshop;


      User.findByIdAndUpdate(userId, { $inc: {wallet: -credits}, $push: {attendedWorkshops: updatedWorkshop}}, {new:true})
        .then((updatedUser) => {
          res.status(200).send("User updated succesfully.");
        })
        .catch((err) =>  next(err))


    })
    .catch((err) => {
      next(err);
    });


})







module.exports = router;