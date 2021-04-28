let mongoose = require ("mongoose");

let Schema = mongoose.Schema

let stockSchema = Schema({
    idproducto: { type: Schema.ObjectId, ref: "stock" },
    cantidad: Number,
})

module.exports = mongoose.model("stock", stockSchema);