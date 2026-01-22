/*Array de animales

Crear un array con 5 animales.

Añadir 2 más (uno al inicio y otro al final).

Eliminar el que está en la tercera posición.

Mostrar la cantidad total de animales.*/


let animales= ["perro","gato","conejo","ganso","caballo"];

animales.unshift("pato");

animales.push("hamster");

animales.splice(2,1);

console.log(animales);
document.writeln(`Hay ${animales.length} animales </br>`)

