module.exports = (mongoose) => {
    var vueloSchema = mongoose.Schema({
      numeroVuelo: {
        type: String,
        required: true,
      },
      ID_TipoAvion: {
        require: true,
        type: Number,
      },
      ID_Ruta: {
        require: true,
        type: Number,
      },
      ID_Asiento: {
        require: true,
        type: Number,
      },
    });
    return mongoose.model("vuelo", vueloSchema);
  };
  