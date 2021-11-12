module.exports = (mongoose) => {
  var rutaSchema = mongoose.Schema({
    _id: {
      require: true,
      type: mongoose.Schema.Types.ObjectId,
    },
    origen: {
      require: true,
      type: String,
    },
    destino: {
      type: String,
      required: true,
    },
    duracion: {
      require: true,
      type: Number,
    },
    precio: {
      require: true,
      type: Number,
    },
  });
  return mongoose.model("ruta", rutaSchema);
};
