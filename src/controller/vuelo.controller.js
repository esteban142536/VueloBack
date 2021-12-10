const db = require("../model");
const vueloModel = db.vuelo;

module.exports.create = (req, res, next) => {
  /*const {numeroVuelo, marca, fechaIda, ID_TipoAvion, ID_Ruta } = req.body;
  const ticket = new vueloModel({ numeroVuelo: numeroVuelo, marca: marca, fechaIda: fechaIda, ID_TipoAvion: ID_TipoAvion, ID_Ruta: ID_Ruta});
  ticket.save();
  res.json(ticket);*/

  const vuelo = new vueloModel(req.body);

  vuelo
    .save(vuelo)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error en crear tipo avion",
      });
    });
};

module.exports.get = async (req, res, next) => {
  const vuelo = await vueloModel.find().exec();
  res.json(vuelo);
};

module.exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const vuelo = await vueloModel.findOne({ _id: id }).exec();
  res.json(vuelo);
};

module.exports.delete = async (req, res, next) => {
  const vuelo = await vueloModel.findByIdAndRemove(req.params.id);
  // si post es null significa que no existe el registro
  if (vuelo) {
    res.json({ result: `vuelo borrado correctamente`, vuelo: vuelo });
  } else {
    res.json({ result: "Id de Vuelo Invalido Invalid", vuelo: vuelo });
  }
};

module.exports.update = async (req, res, next) => {
  const {numeroVuelo, marca, fechaIda, ID_TipoAvion, ID_Ruta } = req.body;
  const vuelo = await vueloModel.findOneAndUpdate(
    { _id: req.params.id },
    {
      numeroVuelo,
      marca,
      fechaIda,
      ID_TipoAvion,
      ID_Ruta,
    }, // ==> {title: title, body: body}
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(vuelo);
};
