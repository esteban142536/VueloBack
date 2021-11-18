const userController = require("../controller/user.controller.js");
const tipoAvionController = require("../controller/tipoAvion.controller.js");
const rutaController = require("../controller/ruta.controller.js");
const vueloController = require("../controller/vuelo.controller.js");
const facturaController = require("../controller/factura.model.js");
const tiqueteController = require("../controller/tiquete.controller.js");

const auth = require("../middleware/auth.js");

module.exports = (app) => {
  var router = require("express").Router();

  // user
  router.post("/", userController.create);
  router.get("/", userController.login);

  //tipo avion
  router.post("/tipoAvion", tipoAvionController.create);
  router.get("/tipoAvion/:id", tipoAvionController.getById);
  router.get("/tipoAvion", tipoAvionController.get);
  router.put("/tipoAvion/:id", tipoAvionController.update);
  router.delete("/tipoAvion/:id", tipoAvionController.delete);

  //ruta
  router.post("/ruta", rutaController.create);
  router.get("/ruta/:id", rutaController.getRutaID);
  router.get("/ruta", rutaController.get);
  router.delete("/ruta/:id", rutaController.delete);
  router.put("/ruta/:id", rutaController.update);

  //vuelo
  router.post("/vuelo", vueloController.create);
  router.get("/vuelo", vueloController.get);
  router.get("/vuelo/:id", vueloController.getById);
  router.put("/vuelo/:id", vueloController.update);
  router.delete("/vuelo/:id", vueloController.delete);

  //facturas

  router.post("/factura", facturaController.create);
  router.get("/factura", facturaController.get);
  router.get("/factura/:id", facturaController.getById);
  router.delete("/factura/:id", facturaController.delete);

  //tiquete

  router.post("/tiquete", tiqueteController.create);
  router.get("/tiquete", tiqueteController.get);
  router.get("/tiquete/:id", tiqueteController.getById);
  router.put("/tiquete/:id", tiqueteController.update);
  router.delete("/tiquete/:id", tiqueteController.delete);

  /*
Ejemplos de otras acciones

    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Create a new Tutorial
    router.delete("/", tutorials.deleteAll);
    */

  app.use("/api/", router);
};
