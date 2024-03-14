const express = require("express");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const server = express();

// Middleware de registro de solicitudes (morgan)
server.use(morgan("dev"));
// Middleware para habilitar CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Especifica el origen exacto para entornos de producción
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  // Manejar solicitudes OPTIONS (preflights)
  if (req.method === "OPTIONS") {
    res.status(200).end();
  } else {
    next();
  }
});
// Middleware para procesar JSON en solicitudes
server.use(express.json());

// Middleware de enrutamiento
server.use("/", routes);

module.exports = server;
