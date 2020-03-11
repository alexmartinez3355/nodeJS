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

/* Función getEmpleado declarando la promesa manualmente */
/* let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id)
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);
        }
    });
} */

/* Función getEmpleado usando Async */
let getEmpleado = async (id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id)
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadoDB;
    }
}

/* Funión getSalario declarando la pomesa manualmente */
/* let getSalario = (empleado) => {
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
} */

/* Función getSalario usando Async */
let getSalario = async (empleado) => {
    let salario_empleado = salarios.find(salario => salario.id === empleado.id);
    if (!salario_empleado) {
        throw new Error(`No se encontró un salario para el usuario ${empleado.nombre}`);
    } else {
        return{
            nombre: empleado.nombre,
            salario: salario_empleado.salario
        };
    }
}

let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `${resp.nombre} tiene un salario de ${resp.salario}`;
}

getInformacion(10).then(mensaje => console.log(mensaje)).catch(err => console.log(err));