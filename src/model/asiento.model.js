module.exports = (mongoose) => {
    var asientoSchema = mongoose.Schema({
      ID_Fila: {
        require: true,
        type: String,
      },
      ID_Asiento: {
        type: String,
        required: true,
      },
      ID_Vuelo: {
        require: true,
        type: String,
      },
      ID_Tiquete: {
        require: true,
        type: String,
      },
    });
    return mongoose.model("asiento", asientoSchema);
  };