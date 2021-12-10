const db = require("../model");
const tiqueteModel = db.tiquete;

module.exports.create = (req, res) => {
  const tiquete = new tiqueteModel(req.body);
  console.log("🚀 ~ file: tiquete.model.js ~ line 6 ~ tiquete", req.body);

  tiquete
    .save(tiquete)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error en crear tiquete",
      });
    });
};

module.exports.get = async (req, res, next) => {
  const tiquete = await tiqueteModel.find().exec();
  console.log("🚀 ~ file: tiquete.controller.js ~ line 20 ~ module.exports.get= ~ tiquete", tiquete)
  res.json(tiquete);
};

module.exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const tiquete = await tiqueteModel.findOne({ _id: id }).exec();
  res.json(tiquete);
};

module.exports.delete = async (req, res, next) => {
  const tiquete = await tiqueteModel.findByIdAndRemove(req.params.id);
  // si post es null significa que no existe el registro
  if (tiquete) {
    res.json({ result: `tiquete borrado correctamente`, tiquete: tiquete });
  } else {
    res.json({ result: "Id de tiquete Invalido Invalid", tiquete: tiquete });
  }
};

module.exports.update = async (req, res, next) => {
  const { _id, ID_Vuelo, codigo_Fila, codigo_Columna } = req.body;
  const tiquete = await tiqueteModel.findOneAndUpdate(
    { _id: _id },
    {
      ID_Vuelo: ID_Vuelo,
      codigo_Fila: codigo_Fila,
      codigo_Columna: codigo_Columna,
    },
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(tiquete);
};
