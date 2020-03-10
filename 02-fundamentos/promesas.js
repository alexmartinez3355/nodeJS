/* Usando Promesas en lugar de Callbacks */
let empleados = [{
    id: 1,
    nombre: 'Alex'
}, {
    id: 2,
    nombre: 'Araceli'
}, {
    id: 3,
    nombre: 'Valentina'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salario_empleado = salarios.find(salario => salario.id === empleado.id);
        if (!salario_empleado) {
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salario_empleado.salario
            });
        }
    });
}

/* Usando promesas de forma normal */
getEmpleado(3).then(empleado => {
    console.log('Empleado de BD:', empleado.nombre);
    getSalario(empleado).then(salario => {
        console.log('y su salario es: ', salario.salario);
    }, (err) => {
        console.log(err);
    })
}, (err) => {
    console.log(err);
})

/* Usando promesas encadenadas */
getEmpleado(3).then(empleado => {
    return getSalario(empleado);
}).then(respuesta => {
    console.log(`El salario de ${respuesta.nombre} es de $${respuesta.salario}`);
}).catch(err =>{
    console.log(err);
});