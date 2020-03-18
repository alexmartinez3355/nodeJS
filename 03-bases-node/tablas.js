/* Require: Este es de un proyecto pripio de node */
let fs = require('fs');
/* Existen 3 tipos de require. 
El primero son los paquetes propios de node.
El segundo son archivos externos por ejemplo (let fs = require('express')).
El tercero son los archivos de nuestro propio proyecto. */

for (let base = 1; base < 10; base++) {
    let tabla = '';
    for (let i = 1; i <= 10; i++) {
        tabla += (`${base} * ${i} = ${base * i}\n`);
    }
    fs.writeFile(`tablas/Tabla-${base}.txt`, tabla, (err) => {
        if(err) throw err;
        console.log(`Tabla del ${ base } ha sido creada`);
    })
}

crearArchivo