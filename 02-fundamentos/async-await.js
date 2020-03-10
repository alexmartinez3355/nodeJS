/* Una forma mas simplificada de trabajar las promesas es 
con los Async */
let getNombre = () =>{
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve('Alexis');
        }, 3000);
    })
};

let saludo = async () => {
    let nombre = await getNombre();

    return `Hola ${ nombre }`;
}
saludo().then(mensaje => {
    console.log(mensaje);
})

/* getNombre().then(nombre => {
    console.log(nombre);
}).catch(e => {
    console.log('Error de ASYNC', e);
}) */