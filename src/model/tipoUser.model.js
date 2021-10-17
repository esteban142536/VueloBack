module.exports = (mongoose) => {
  var schema = mongoose.Schema({
    id: String,
    name: String,
  });

  return mongoose.model("tipoUsuario", schema);
};
