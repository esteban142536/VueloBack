const db = require("../model");
const asientoModel = db.asiento;

module.exports.create = (req, res) => {
  const asiento = new asientoModel(req.body);

  asiento
    .save(asiento)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error en crear asientos",
      });
    });
};

module.exports.getAsientoID = async (req, res) => {
  const { _id } = req.query;

  if (!_id) {
    res.status(400).send({ message: `The ID can not be empty!` });
    return;
  }

  const ruta = await asientoModel.findOne({ _id: _id }).exec();

  if (ruta) {
    res.send(ruta);
    return;
  }
  res.status(400).send({ msg: "Asiento no existente" });
};
