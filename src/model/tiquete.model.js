module.exports = (mongoose) => {
    var tiqueteSchema = mongoose.Schema({
      fechaVuelo: {
        type: Date,
        required: true,
      },
      ID_Avion: {
        require: true,
        type: [{ type: mongoose.Schema.Types.ObjectId, 
          ref: "vuelo" }],
      },
      ID_Persona: {
        require: true,
        type: [{ type: mongoose.Schema.Types.ObjectId, 
          ref: "user" }],
      },
      ID_Asiento: {
        require: true,
        type: [{ type: mongoose.Schema.Types.ObjectId, 
          ref: "asiento" }],
      },

    });
    return mongoose.model("tiquete", tiqueteSchema);
  };
  