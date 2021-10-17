const bcrypt = require('bcrypt-nodejs');

module.exports = (mongoose) => {
  var userSchema = mongoose.Schema({
    id: String,
    type: String,
    password: String,
    email: String,
    ID_tipoUsuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tipoUsuario",
    },
  });


  userSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
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
