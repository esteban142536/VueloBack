const db = require("../model");
const User = db.user;

/**
Here is the logic of the responses, necessary to make the api work
 */


// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.email || !req.body.password) {
    const error = !req.body.email ? "Email" : "Password";
    res.status(400).send({ message: `${error} can not be empty!` });
    return;
  }

  // Create a User
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    type: "user",
  });

  // Save User in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};
