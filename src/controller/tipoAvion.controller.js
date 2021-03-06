const db = require("../model");
const tipoAvionModel = db.tipoAvion;

module.exports.create = (req, res) => {
  const tipoAvion = new tipoAvionModel(req.body);
  console.log(
    "🚀 ~ file: tipoAvion.controller.js ~ line 6 ~ req.body",
    req.body
  );

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
  const { nombre, cantidadFila, cantidadAsientos } = req.body;
  const tipoAvion = await tipoAvionModel.findOneAndUpdate(
    { _id: req.params.id },
    {
      nombre,
      cantidadFila,
      cantidadAsientos,
    },
    { new: true }
  );
  res.json(tipoAvion);
};
