//! AQUI MANEJARIAMOS LAS RUTAS
//RUTAS IMPORTADAS
const express = require("express");
const message = require("../components/message/network");

//FUNCTION
const routes = function (server) {
  server.use("/message", message);
};

module.exports = routes;
