const db = require("../model");
const rutaModel = db.ruta;

module.exports.create = (req, res) => {
  const ruta = new rutaModel(req.body);

  ruta
    .save(ruta)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error en crear rutas",
      });
    });
};

module.exports.getRutaID = async (req, res) => {
  const { _id } = req.query;

  if (!_id) {
    res.status(400).send({ message: `The ID can not be empty!` });
    return;
  }

  const ruta = await rutaModel.findOne({ _id: _id }).exec();

  if (ruta) {
    res.send(ruta);
    return;
  }
  res.status(400).send({ msg: "La ruta esta vacia o no existe" });
};

module.exports.get = async (req, res, next) => {
  const ruta = await rutaModel.find().exec();
  res.json(ruta);
};

module.exports.delete = async (req, res, next) => {
  const ruta = await rutaModel.findByIdAndRemove(req.params.id);
  // si post es null significa que no existe el registro
  if (ruta) {
    res.json({
      result: `ruta borrado correctamente`,
      ruta: ruta,
    });
  } else {
    res.json({
      result: "Id de ruta Invalido Invalid",
      ruta: ruta,
    });
  }
};

module.exports.update = async (req, res, next) => {
  const { _id, origen, destino, duracion, precio } = req.body;
  const ruta = await rutaModel.findOneAndUpdate(
    { _id: _id },
    {
      origen: origen,
      destino: destino,
      duracion: duracion,
      precio: precio,
    },
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(ruta);
};
