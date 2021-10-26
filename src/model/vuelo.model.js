module.exports = (mongoose) => {
    var vueloSchema = mongoose.Schema({
      numeroVuelo: {
        type: String,
        required: true,
      },
      ID_TipoAvion: {
        require: true,
        type: [{ type: mongoose.Schema.Types.ObjectId, 
          ref: "tipoAvion" }],
      },
      ID_Ruta: {
        require: true,
        type: [{ type: mongoose.Schema.Types.ObjectId, 
          ref: "ruta" }],
      },
      ID_Asiento: {
        require: true,
        type: [{ type: mongoose.Schema.Types.ObjectId, 
          ref: "asiento" }],
      },
    });
    return mongoose.model("vuelo", vueloSchema);
  };
  