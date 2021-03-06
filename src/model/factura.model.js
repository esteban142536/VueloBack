module.exports = (mongoose) => {
  var facturaSchema = mongoose.Schema({
    _id: {
      require: true,
      type: mongoose.Schema.Types.ObjectId,
    },
    ID_Usuario: {
      require: true,
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
    },
    fecha: {
      type: Date,
      required: true,
    },
    ID_Tiquete: {
      require: true,
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "tiquete" }],
    },
    IVA: {
      require: true,
      type: Number,
    },
    Total: {
      require: true,
      type: Number,
    },
  });
  return mongoose.model("factura", facturaSchema);
};
