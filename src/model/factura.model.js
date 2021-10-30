module.exports = (mongoose) => {
  var facturaSchema = mongoose.Schema({
    ID_Usuario: {
      require: true,
      type: [{ type: String, 
        ref: "user" }],
    },
    fecha: {
      type: Date,
      required: true,
    },
    ID_Tiquete: {
      require: true,
      type: String,
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
