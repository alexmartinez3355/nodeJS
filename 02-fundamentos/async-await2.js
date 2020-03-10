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

let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    console.log(empleado);
}

getInformacion(2)