module.exports = (mongoose) => {
  var vueloSchema = mongoose.Schema({
    _id: {
      require: true,
      type: mongoose.Schema.Types.ObjectId,
    },
    numeroVuelo: {
      type: String,
      required: true,
    },
    marca: {
      type: String,
      required: true,
    },
    fechaIda: {
      type: Date,
      required: true,
    },
    ID_TipoAvion: {
      require: true,
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "tipoAvion" }],
    },
    ID_Ruta: {
      require: true,
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "ruta" }],
    },
  });
  return mongoose.model("vuelo", vueloSchema);
};
