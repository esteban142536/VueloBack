const db = require("../model");
const UserModel = db.user;
const jwt = require("jsonwebtoken");
const dotEnv = require("dotenv");
dotEnv.config();

/**
Here is the logic of the responses, necessary to make the api work
 */

// Create and Save a new User
module.exports.create = (req, res) => {
  // Validate request
  if (!req.body.email || !req.body.password) {
    const error = !req.body.email ? "Email" : "Password";
    res.status(400).send({ message: `${error} can not be empty!` });
    return;
  }

  // Create a User
  const user = new UserModel({
    email: req.body.email,
    password: req.body.password,
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    tipoUsuario: req.body.tipoUsuario,
    fecNacimient: req.body.fecNacimient,
    edad: req.body.edad,
    direccion: req.body.direccion,
    telefono: req.body.telefono,
  });

  // Save User in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error while we create the user",
      });
    });
};

//make login
module.exports.login = async (req, res) => {
  //get the data
  const { email, password } = req.query;

  // Validate request
  if (!email || !password) {
    const error = !req.body.email ? "Email" : "Password";
    res.status(400).send({ message: `${error} can not be empty!` });
    return;
  }

  // Search User in the database
  const user = await UserModel.findOne({ email: email }).exec();

  //validate data
  if (!user) {
    res
      .status(400)
      .send({ success: false, msg: "Authentication failed. User not found." });
  } else {
    //Si el usuario existe verifica si las contraseñas
    user.comparePassword(password, user.password, function (err, isMatch) {
      if (isMatch && !err) {
        // Si el usuario es correcto y la contraseña coindice se procede a crear el token
        const token = jwt.sign({ email: email }, process.env.SECRETOKEN, {
          expiresIn: "2h",
        });
        // return the information including token as JSON
        //  res.json({ success: true, token: "JWT " + token });

        res.send(user);
        return;
      } else {
        //si la contraseña no coincide se procede a indicar el error
        res.status(400).send({
          success: false,
          msg: "Authentication failed. Wrong password.",
        });
        return;
      }
    });
  }
};
