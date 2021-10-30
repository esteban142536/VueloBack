module.exports = (mongoose) => {
  var tiqueteSchema = mongoose.Schema({
    ID_Vuelo: {
      require: true,
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "vuelo" }],
    },
    codigo_Fila: {
      require: true,
      type: String,
    },
    codigo_Columna: {
      require: true,
      type: String,
    },
  });
  return mongoose.model("tiquete", tiqueteSchema);
};
