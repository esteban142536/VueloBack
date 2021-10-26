module.exports = (mongoose) => {
    var tiqueteSchema = mongoose.Schema({
      fechaVuelo: {
        type: Date,
        required: true,
      },
      ID_Avion: {
        require: true,
        type: String,
      },
      ID_Persona: {
        require: true,
        type: String,
      },
      ID_Asiento: {
        require: true,
        type: String,
      },

    });
    return mongoose.model("tiquete", tiqueteSchema);
  };
  