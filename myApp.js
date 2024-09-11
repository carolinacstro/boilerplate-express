let express = require("express");
const res = require("express/lib/response");
let app = express();
let path = require("path");
require("dotenv").config();

console.log("Hello World");

// Middleware para servir arquivos estáticos
app.use("/public", express.static(__dirname + "/public"));

// Rota para a página inicial
app.get("/", function (req, res) {
  let absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
});

app.get("/json", function (req, res) {
  let message = "Hello json";
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  res.json({ message: message });
});

module.exports = app;

module.exports = app;
