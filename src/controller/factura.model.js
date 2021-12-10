const db = require("../model");
const facturaModel = db.factura;

module.exports.create = (req, res) => {
  const factura = new facturaModel(req.body);

  factura
    .save(factura)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error en crear factura",
      });
    });
};

module.exports.get = async (req, res, next) => {
  const factura = await facturaModel.find().exec();
  res.json(factura);
};

module.exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const factura = await facturaModel.findOne({ _id: id }).exec();
  res.json(factura);
};

module.exports.delete = async (req, res, next) => {
  const factura = await facturaModel.findByIdAndRemove(req.params.id);
  // si post es null significa que no existe el registro
  if (factura) {
    res.json({ result: `factura borrado correctamente`, factura: factura });
  } else {
    res.json({ result: "Id de factura Invalido Invalid", factura: factura });
  }
};
module.exports.update = async (req, res, next) => {
  const data = req.body;
  const id = data._id;
  const tiquete = await tiqueteModel.findOneAndUpdate(
    { _id: id },
    data,
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(tiquete);
};
