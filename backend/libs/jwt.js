let jwt = require ("jwt-simple");
let secret = "007";
exports.createToken = (usuario) => {
    let payload = {
        nombres: usuario.nombres,
        apellidos: usuario.apellidos,
        edad: usuario.edad,
        pass: usuario.pass,
        correo: usuario.correo,
        rol: usuario.rol,
    };
return jwt.encode(payload, secret);
};
