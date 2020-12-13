const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {isLoggedIn} = require("./../helpers/middlewares");
const User = require("./../models/user.model");

const uploader = require("./../config/cloudinary-setup");

const Workshop = require('../models/workshop.model');


//GET ALL WORKSHOPS
router.get('/workshops', (req, res, next) => {
  Workshop.find()
  .then((foundWorkshops) => {
    res.status(200).json(foundWorkshops);
  })
  .catch((err) => {
    res
      .status(400)
  });
});



// include CLOUDINARY:
//upload a single image per once.
// ADD an horitzontal middleware
router.post("/upload", uploader.single("img"), (req, res, next) => {
  console.log("file is: ", req.file);

  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  // get secure_url from the file object and save it in the
  // variable 'secure_url', but this can be any name, just make sure you remember to use the same in frontend
  res.json({ secure_url: req.file.secure_url });
});




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


// PUT '/api/workshops/:id  => make changes to workshop (ROUTER TO CALCULATE NEW WALLET UPDATE)

router.put('/workshops/:id', (req, res, next) => {
  const { id } = req.params;
  const { title, img, description, category, date, length, credits, maxParticipants, location, userId} = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400) //  Bad Request
      .json({ message: "Specified id is not valid" });
    return;
  }

  Workshop.findById(id)
    .then((oldWorkshop) => {
      const oldPrice = oldWorkshop.credits;
      Workshop.findByIdAndUpdate(id, { title, img, description, category, date, length, credits, maxParticipants, location} )
        .then((updatedWorkshop) => {

          console.log("UPDATED WORKSHOP CREDITS after updated", updatedWorkshop.credits);

          if (oldPrice === credits) {
            res.status(200).send("Workshop updated.");
          } else if ( credits < oldPrice) {
            User.findByIdAndUpdate(userId, { $inc: {wallet: -updatedWorkshop.credits}}, {new:true})
            .then((updatedUser) => {
              res.status(200).send("User updated succesfully.");
            })
            .catch((err) =>  next(err))
          } else {
            console.log("UPDATED WORKSHOP CREDITS after updated", updatedWorkshop.credits);
            User.findByIdAndUpdate(userId, { $inc: {wallet: 50}}, {new:true})
            .then((updatedUser) => {
              res.status(200).send("User updated succesfully.");
            })
            .catch((err) =>  next(err))
          }
         
    
        })
        .catch((err) => {
          next(err);
        });

    })
    .catch((err) =>  next(err) );



  // Workshop.findByIdAndUpdate(id, { title, img, description, category, date, length, credits, maxParticipants, location} )
  //   .then((updatedWorkshop) => {


  //     User.findByIdAndUpdate(userId, { $inc: {wallet: updatedWorkshop.credits*2}}, {new:true})
  //       .then((updatedUser) => {
  //         res.status(200).send("User updated succesfully.");
  //       })
  //       .catch((err) =>  next(err))

  //   })
  //   .catch((err) => {
  //     next(err);
  //   });

});




// GET '/api/workshops/category/:category  => returns results by category

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
    .populate("participants")
    .then((foundWorkshop) => {
      
      res.status(200).json(foundWorkshop);
    })
    .catch((err) => {
      res.status(500).json(err);
    })
})

// // PUT '/api/workshops/:id  => make changes to workshop

// router.put('/workshops/:id', (req, res, next) => {
//   const { id } = req.params;
//   const { title, img, description, category, date, length, credits, maxParticipants, location} = req.body;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     res
//       .status(400) //  Bad Request
//       .json({ message: "Specified id is not valid" });
//     return;
//   }

//   Workshop.findByIdAndUpdate(id, { title, img, description, category, date, length, credits, maxParticipants, location} )
//     .then(() => {
//       res.status(200).send();
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

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



// POST '/api/workshops/signup/:id  => signup for workshop

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


});




// POST '/api/workshops/cancel/:id  => cancel participance for workshop

router.post('/workshops/cancel/:id', (req,res,next)  => {
  const { id } = req.params;
  const {userId} = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res
      .status(400) //  Bad Request
      .json({ message: "Specified id is not valid" });
    return;
  }

  Workshop.findByIdAndUpdate(id, {$pull: {participants: userId }}, {new: true})
    .then((updatedWorkshop) => {
      const {credits} = updatedWorkshop;
      //const credtis = updatedWorkshop.credits;

      console.log("IIIIIDDDDDDDD", userId);
      
      User.findByIdAndUpdate(userId, { $inc: {wallet: credits}, $pull: {attendedWorkshops: updatedWorkshop}}, {new:true})
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