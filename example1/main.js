//Ejemplo de como importar una funcion de module.js, crear el objeto request e invocar al metodo 'method'
//definido dentro de la funcion
var mod = require("./module.js");
var request = mod({
    type: 'foobar'
});
request.method({
    x: 10,
    y: 20
});