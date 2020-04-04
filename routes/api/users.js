const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const config = require('../../config/keys')
const passport = require('passport')

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/', (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err =>
      res.status(404).json({ noUsersFound: 'No users found' }
      )
    );
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err =>
      res.status(400).json(err))
});

router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json({ msg: "User deleted." }))
    .catch(err =>
      res.status(400).json(err))
});

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
    res.json({
      id: req.user.id,
      email: req.user.email,
      admin: req.user.admin
    });
  })

router.post('/edit/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {

      user.firstName = req.body.firstName === "" ? user.firstName : req.body.firstName;
      user.lastName = req.body.lastName === "" ? user.lastName : req.body.lastName;
      user.email = req.body.email === "" ? user.email : req.body.email;
      user.mobile = req.body.mobile === "" ? user.mobile : req.body.mobile;
      user.schoolId = req.body.schoolId === "" ? user.schoolId : req.body.schoolId;

      user.save()
        .then(user => res.json(user))
        .catch(err =>
          res.status(400).json(err))
    })
    .catch(err =>
      res.status(400).json(err))
});


router.post('/register', (req, res) => {
  
    const { errors, isValid } = validateRegisterInput(req.body);
    
    if (!isValid) {
      return res.status(400).json(errors);
    } 
    
    User.findOne({ email: req.body.email })
      .then(user => {

        if (user) {
          console.log("a user has already been registered with this address");
          return res.status(400).json({email: "A user has already registered with this address"})
        } else { 
            // creation of new user happens here
            const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mobile: req.body.mobile,
            schoolId: req.body.schoolId,
            email: req.body.email,
            password: req.body.password,
            admin: false
          })


            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                    .then(user => {
                        const payload = {
                          id: user.id,
                          firstName: user.firstName,
                          lastName: user.lastName,
                          email: user.email,
                          mobile: user.mobile,
                          schoolId: user.schoolId,
                          adminStatus: user.admin
                        };

                        //key will expire in an hour
                        jwt.sign(payload, config.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                            res.json({
                              success: true,
                              token: "Bearer " + token
                            });
                          });
                        })
                    .catch(err => console.log(err))
                })
            })
        }
    })
})



// Login route

router.post('/login', (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
  
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
    .then(user => {
      if (!user) {
        errors.email = 'User not found';
        return res.status(404).json(errors);
    }

    bcrypt.compare(password, user.password)
        .then(isMatch => {
            if (isMatch) {
            const payload = {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              mobile: user.mobile,
              schoolId: user.schoolId,
              adminStatus: user.admin
            };

            jwt.sign(
                payload,
                config.secretOrKey,
                // the key will expire in one hour
                {expiresIn: 3600},
                (err, token) => {
                res.json({
                    success: true,
                    token: 'Bearer ' + token
                });
              });
            } else {
                errors.password = "Incorrect password";
                return res.status(400).json(errors);
            }
        })
    })
})


module.exports = router;