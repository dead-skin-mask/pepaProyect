const stock = require("../models/stock");
let Stock = require ("../models/stock");


const registrarStock = (req, res) => {
    let params = req.body;
    let stock = new Stock();
    stock.cantidad = params.cantidad;
    stock.save((err, saveStock) => {
      if (err) {
        res.status(500).send({ mensaje: "Error al conectar al servidor hijo." })
      } else {
        if (saveStock) {
          res.status(200).send({ stock: saveStock });
        } else {
          res.status(401).send({ mensaje: "No se pudo registrar la cantidad en stock." });
        }
      }
    });
  }

module.exports = {
    registrarStock,
};
