let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let port = process.env.PORT || 3001;
let app = express();
let usuarioRoutes = require("./routes/usuario")
let Producto = require("./routes/producto")
let Stock = require("./routes/stock");
const stock = require("./models/stock");
mongoose.connect(
  "mongodb://127.0.0.1:27017/pepaProyect",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, res) => {
    if (err) {
      throw err;
    } else {
      console.log("Servidor DB: ON");
      app.listen(port, function () {
        console.log("Servidor Backend funcionando en el puerto: " + port);
      });
    }
  }
);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/api", usuarioRoutes);
app.use("/api", Producto);
app.use("/api", stock);
module.exports = app;