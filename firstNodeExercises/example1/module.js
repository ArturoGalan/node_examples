//Ejemplo de como crear un modulo, y exportar la funcion para que lo use el main.
//La funcion devuelve un objeto que tiene propiedads y el metodo 'method'
module.exports = function (options){
    var limit = 100
    if(options.type === 'foobar'){
        limit = 200;
    }
    return {
        name: 'request',
        limit: limit,
        type: options.type,
        method: function(data) {
            console.log(data);
            return data;
        }
    };
};