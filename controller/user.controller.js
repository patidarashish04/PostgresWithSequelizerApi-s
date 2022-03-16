const db = require('../models');
const Users = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Users
exports.create = (req, res) => {
        // Validate request
        if (!req.body.firstName) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
  }
// Create a users
const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  };
  // Save users in the database
  Users.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Users."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const firstName = req.query.firstName;
  var condition  =  firstName ? {firstName: {[Op.iLike]: `%&{firstName}%`}} :null;
  Users.findAll({where : condition})
  .then(data =>{
    res.send(data);
  })
  .catch(err =>{
    res.status(500).send({
      message: err.message || "some error occured"
    });
  });
};