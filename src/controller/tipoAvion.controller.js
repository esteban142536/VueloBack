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
