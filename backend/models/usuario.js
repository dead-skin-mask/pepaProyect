let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let usuarioSchema = Schema({
    nombres: String,
    apellidos: String,
    edad: String,
    pass: String,
    correo: String,
    rol: String,
})

module.exports = mongoose.model("usuario", usuarioSchema);