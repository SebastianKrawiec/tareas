let fs = require("fs");


module.exports = moduloTareas = {
    archivo : "./tareas.json",
    //nombre del archivo a trabajar
    leerJSON : function(){
        let listaDeTareas = fs.readFileSync(this.archivo, "utf-8");
        //esto lee el JSON
        return JSON.parse(listaDeTareas);
        //esto lo parsea para poder trabajarlo
    }
}
/* conviene tenerlo así para poder saber con qué
está trabajando. a su vez ya queda exportado*/


/* En esta ejercitación te pediremos que desarrolles una pequeña aplicación modularizada que,
dado un archivo .json de productos, al ejecutarla por línea de comandos pueda recibir las
siguientes instrucciones:
- listar todos los productos
- agregar un nuevo producto
- filtrar los productos según su precio(ej.: Todos los productos que tengan un precio entre 20 y 100)
- modificar el precio de un producto específico
+Extras+
- eliminar un producto
- buscar un producto */
