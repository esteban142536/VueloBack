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
