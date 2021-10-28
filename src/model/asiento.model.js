module.exports = (mongoose) => {
  var asientoSchema = mongoose.Schema({
    Fila: {
      require: true,
      type: String,
    },
    ID_Vuelo: {
      require: false,
      type: [{ type: String, ref: "vuelo" }],
    },
    ID_Tiquete: {
      require: false,
      type: [{ type: String, ref: "tiquete" }],
    },
  });
  return mongoose.model("asiento", asientoSchema);
};
