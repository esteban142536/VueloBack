module.exports = (mongoose) => {
  var tipoAvionSchema = mongoose.Schema({
    nombre: {
      type: String,
      required: true,
    },
    cantidadFila: {
      require: true,
      type: Number,
    },
    cantidadAsientos: {
      require: true,
      type: Number,
    },
  });
  return mongoose.model("tipoAvion", tipoAvionSchema);
};
