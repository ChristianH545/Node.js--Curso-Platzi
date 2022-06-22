//importamos framework
const express = require("express");
//importamos de nuestra carpeta network y el archivo response.js
const response = require("../../network/response");

//importamos el archivo controlle
const controller = require("./controller");
// Luego anadimos el router de la siguiente forma:
const router = express.Router();

// inicializamos utilizando router con el metodo GET.

// con esta sintaxis realizamos las rutas para nuesta app

router.get("/", function (req, res) {
  //*ahora trabajaremos las cabeceras "headers" de la siguiente forma:

  console.log(req.headers);

  //* de esta manera trabajariamos cabeceras pesonalizada para el cliente

  res.header({
    "Custom-Header": "Nuestro Valor Personalizado",
  });
  // !Antes
  // res.send("Lista de Mensajes "); lo comentamos porque trabajaremos las respuesta con el modulo importado response de la siguiente forma:
  //! Ahora
  response.success(req, res, "Lista de menssaje");
});

router.post("/", function (req, res) {
  //* ¿y donde encontramos el body? en la req de la siguiente forma
  console.log(req.body);

  //* si queremos trabajar con la query se hara de las misma forma que con el body ejemplo
  console.log(req.query);

  //* para la concatenacion de mensaje del body y el text mas el mensaje que diseñamos
  res.send("Mensaje:" + req.body.text + " ¡añadido Correctamente!");
});

router.put("/", function (req, res) {
  controller
    .addMessage(req.body.user, req.body.message)
    .then(() => {
      response.success(req, res, "Creado Correctamente", 201);
    })
    .catch((e) => {
      response.error(
        req,
        res,
        "Informacion Invalida ",
        400,
        "Error en el Controller"
      );
    });
});

module.exports = router;
