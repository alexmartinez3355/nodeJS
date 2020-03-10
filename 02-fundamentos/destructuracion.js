/* La destructuración consiste en sacar 2 o mas atributos de un objeto
pero todo a la vez. */

// Creamos el objeto
let iron_man = {
    nombre: 'Antony',
    apellido: 'Stark',
    raza: 'Humano',
    poderes: ['Armadura de alta tecnología', 'Inteligencia superhumana'],
    getCaracteristicas: function(){
        return `Nombre: ${ this.nombre } ${ this.apellido }, Raza: ${ this.raza }, Poderes: ${ this.poderes }`
    }
}

let {nombre, apellido, raza, poderes} = iron_man;

console.log(nombre);
console.log(apellido);
console.log(raza);
console.log(poderes);