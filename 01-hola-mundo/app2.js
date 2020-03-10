function saludar ( nombre ){
    let mensaje = `Hola ${ nombre }`;
    return mensaje;
}

let saludo = saludar('Alex Martínez Arteaga');
console.log(saludo);