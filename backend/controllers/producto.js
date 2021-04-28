let Producto = require("../models/producto")
const registrarProducto = (req, res) => {
    let params = req.body;
    let producto = new Producto();
    producto.nombre = params.nombre
    producto.descripcion = params.descripcion
    producto.precio = params.precio
    producto.save((err, saveProducto) => {
        if (err) {
            res.status(500).send({mensaje: "Error al conectar al servidor"})
        } else {
            if (saveProducto) {
                res.status(200).send({Producto: saveProducto})
            } else {
                res.status(401).send({mensaje: "No se pudo registrar el producto"})
            }
        }
    })
}
const buscarProducto = (req, res) => {
    let nombre = req.params["nombre"];
    Producto.find ({nombre: nombre}, (err, datosProducto) => {
        if (err) {
            res.status(500).send({mensaje: "Error al conectar al servidor"})
        } else {
            if (datosProducto) {
                res.status(200).send({producto: datosProducto})
            } else {
                res.status(401).send({mensaje: "El producto no existe"})
            }           
        }
    });
}
const listaProducto = (req, res) => {
    let nombre = req.params["nommbre"];
    Producto.find({nombre: new RegExp(nombre, "i")}, (err, datosProducto) => {
        if (err) {
            res.status(500).send({mensaje: "Error al conectar al servidor"})
        } else {
            if (datosProducto) {
                res.status(200).send({producto: datosProducto})
            } else {
                res.status(401).send({mensaje: "No hay productos"})
            }
        }
    })
}
const editarProducto = (req, res) => {
    let nombre = req.params["nombre"];
    let params = req.body;
    Categoria.find(
      {nombre: nombre },
      { nombre: params.nombre, descripcion: params.descripcion },
      (err, datosProducto) => {
        if (err) {
          res.status(500).send({ mensaje: "Error al conectar al servidor" });
        } else {
          if (datosProducto) {
            res.status(200).send({ producto: datosProducto });
          } else {
            res.status(401).send({ mensaje: "No hay Productos" });
          }
        }
      }
    );
  };
  const eliminarProducto = (req, res) => {
    //obtener el ID
    let nombre = req.params["nombre"];
    //eliminamos la ctegoria por el ID
    Categoria.find({ nombre: nombre },
      (err, datosProducto) => {
        if (err) {
          res.status(500).send({ mensaje: "Error al conectar al servidor" });
        } else {
          if (datosProducto) {
            res.status(200).send({ producto: datosProducto });
          } else {
            res.status(401).send({ mensaje: "No hay Productos" });
          }
        }
      }
    );
  };
module.exports = {
    registrarProducto,
    buscarProducto,
    listaProducto,
    editarProducto,
    eliminarProducto
}