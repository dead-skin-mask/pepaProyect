let express = require("express")
let Producto = require("../controllers/producto")
let api = express.Router()
api.post("/producto/registarProducto",Producto.registrarProducto)
api.get("/producto/:nombre?", Producto.buscarProducto)
api.get("/producto/:nombre?", Producto.listaProducto)
api.post("/producto/:nombre?", Producto.listaProducto)
module.exports = api
