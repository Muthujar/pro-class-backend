// const router=require('express').Router
const Users = require("../../modals/user.modal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

module.exports = {

  getAllUsers: async (req, res, next) => {
    try {
      // const results = await Users.find({}, { __v: 0 });
      const results = await Users.find();

      console.log("ff");
      // const results = await Product.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Product.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  signUpUsers: async (req, res, next) => {
    try {
      console.log(req);

      if (req.body) {
        const username = req.body.username;

        const existingUser = await Users.findOne({ username });
        if (existingUser) {
          return res.status(409).json({ error: "Username already exists" });
        }
        const password = req.body.password;
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hashPassword) => {
            if (err)
              return res
                .status(500)
                .send("Error:" + err.message || "something went wrong");
            const password = hashPassword;
            const newUser = new Users({ ...req.body, password });

            newUser.save().then(() => {
              res.status(200).send("registered successfully");
            });
            console.log(newUser);
          });

          // res.status(200).send("registered successfully");
        });
      }
    } catch (error) {
      res.status(400).send("Error:" + error.message || "couldn't signup");
      console.log(error);
    }
  },

  loginUser: async (req, res, next) => {
    try {
      console.log(req);
      const secretKey = uuidv4();

      const user = await Users.findOne({ username: req.body.username });
      if (!user) {
        return res.status(400).json({error: "user not found ,plz register" })
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );

      if (!validPassword) {
        return res.status(400).json({ error: "password not match" })
        ;
      }
      jwt.sign({ user: user }, secretKey, (err, token) => {
        res
          .status(200)
          .json({ token, message: "login successful" })
          .send("login successfully");
      });
    } catch (error) {
      res.status(400).send("Error:" + error);
      console.log(error);
    }
  },
};
