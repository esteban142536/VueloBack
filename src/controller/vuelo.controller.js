const db = require("../model");
const vueloModel = db.vuelo;

module.exports.create = (req, res) => {
  const tipoAvion = new vueloModel(req.body);

  tipoAvion
    .save(tipoAvion)
    .then((data) => res.send(data))
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error en crear tipo avion",
      });
    });
};
