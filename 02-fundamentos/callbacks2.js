let empleados = [{
    id: 1,
    nombre: 'Alex'
},{
    id: 2,
    nombre: 'Araceli'
},{
    id: 3,
    nombre: 'Valentina'
}];

let salarios = [{
    id: 1,
    salario: 1000
},{
    id: 2,
    salario: 2000
}];

let getEmpleado = (id, callback) => {
    let empleadoDB = empleados.find( empleado  => empleado.id === id)
  /*   console.log(empleadoDB); */
    if(!empleadoDB){
        callback(`No existe un empleado con el ID ${ id }`)
    } else{
        callback(null, empleadoDB);
    }
}

let getSalario = (empleado, callback) => {
    let salario_empleado = salarios.find( salario => salario.id === empleado.id);
    if(!salario_empleado){
        callback(`No se encontró un salario para el usuario ${ empleado.nombre }`);
    }else{
        callback(null, {
            nombre: empleado.nombre,
            salario: salario_empleado.salario
        });
    }
}

getEmpleado(1, (err, empleado) => {
    if(err){
        return console.log(err);
    }
    getSalario(empleado, (err, respuesta) => {
        if(err){
            return console.log(err);
        }
        console.log(`El salario de ${ respuesta.nombre } es de $ ${ respuesta.salario }`);
    })
});

