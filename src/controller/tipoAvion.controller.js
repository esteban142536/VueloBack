const db = require("../model");
const tipoAvionModel = db.tipoAvion;

module.exports.create = (req, res) => {
  const tipoAvion = new tipoAvionModel(req.body);

  tipoAvion
    .save(tipoAvion)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error en crear tipo avion",
      });
    });
};

module.exports.get = async (req, res, next) => {
  const tipoAvion = await tipoAvionModel.find().exec();
  res.json(tipoAvion);
};

module.exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const tipoAvion = await tipoAvionModel.findOne({ _id: id }).exec();
  res.json(tipoAvion);
};

module.exports.delete = async (req, res, next) => {
  const tipoAvion = await tipoAvionModel.findByIdAndRemove(req.params.id);
  // si post es null significa que no existe el registro
  if (tipoAvion) {
    res.json({
      result: `tipoAvion borrado correctamente`,
      tipoAvion: tipoAvion,
    });
  } else {
    res.json({
      result: "Id de tipoAvion Invalido Invalid",
      tipoAvion: tipoAvion,
    });
  }
};

module.exports.update = async (req, res, next) => {
  const { _id, nombre, cantidadFila, cantidadAsientos } = req.body;
  const tipoAvion = await tipoAvionModel.findOneAndUpdate(
    { _id: _id },
    {
      nombre: nombre,
      cantidadFila: cantidadFila,
      cantidadAsientos: cantidadAsientos,
    },
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(tipoAvion);
};
