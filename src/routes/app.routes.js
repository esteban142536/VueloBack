const userController = require("../controller/user.controller.js");
const tipoAvionController = require("../controller/tipoAvion.controller.js");
const rutaController = require("../controller/ruta.controller.js");
const vueloController = require("../controller/vuelo.controller.js");
const auth = require("../middleware/auth.js");

module.exports = (app) => {
  var router = require("express").Router();

  // Create a new User
  router.post("/", userController.create);

  //Get the user
  router.get("/", userController.login);

  //create tipo avion
  router.post("/tipoAvion", tipoAvionController.create);

  //crear la ruta
  router.post("/ruta", rutaController.create);

  //buscar una ruta por ID
  router.get("/ruta", rutaController.getRutaID);

  //Crear vuelo
  router.get("/vuelo", vueloController.create);

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
