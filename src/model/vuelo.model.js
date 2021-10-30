module.exports = (mongoose) => {
  var vueloSchema = mongoose.Schema({
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
      type: [{ type: String, ref: "tipoAvion" }],
    },
    ID_Ruta: {
      require: true,
      type: [{ type: String, ref: "ruta" }],
    },
  });
  return mongoose.model("vuelo", vueloSchema);
};
