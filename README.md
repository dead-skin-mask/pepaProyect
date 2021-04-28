# pepaProyect
Taller
    //
    let usuarioSchema = Schema({
    nombres: String,
    apellidos: String,
    edad: String,
    pass: String,
    correo: String,
    rol: String,
    //
    let productoSchema = Schema ({
    nombre: String,
    descripcion: String,
    precio: Number,
    //
    let stockSchema = Schema({
    idproducto: { type: Schema.ObjectId, ref: "stock" },
    cantidad: Number,
