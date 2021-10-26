const bcrypt = require("bcrypt-nodejs");

module.exports = (mongoose) => {
  var userSchema = mongoose.Schema({
    nombre: {
      type: String,
      required: true,
    },
    apellido: {
      type: String,
      required: true,
    },
    fecNacimient: {
      type: Date,
      required: true,
    },
    edad: {
      type: Number,
      required: true,
    },
    direccion: {
      required: true,
      type: String,
    },
    telefono: {
      required: true,
      type: Number,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    tipoUsuario: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
  });

  userSchema.pre("save", function (next) {
    var user = this;
    if (this.isModified("password") || this.isNew) {
      bcrypt.genSalt(10, function (err, salt) {
        if (err) {
          return next(err);
        }
        bcrypt.hash(user.password, salt, null, function (err, hash) {
          if (err) {
            return next(err);
          }
          user.password = hash;
          next();
        });
      });
    } else {
      return next();
    }
  });

  userSchema.methods.comparePassword = async (passw, userPassw, cb) => {
    bcrypt.compare(passw, userPassw, function (err, isMatch) {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  };

  return mongoose.model("user", userSchema);
};
