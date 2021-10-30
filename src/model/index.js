const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = require("./user.model.js")(mongoose);
db.factura = require("./factura.model.js")(mongoose);
db.ruta = require("./ruta.model.js")(mongoose);
db.tipoAvion = require("./tipoAvion.model.js")(mongoose);
db.tiquete = require("./tiquete.model.js")(mongoose);
db.vuelo = require("./vuelo.model.js")(mongoose);

module.exports = db;

//nesesary logic to conect to the DB
