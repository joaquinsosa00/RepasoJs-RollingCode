//Filtrar números mayores a 10


let numerosMayoresA10 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


document.writeln(`---------------------------</br>`);

let nuevoArrray=[]

for (let index = 0; index <= numerosMayoresA10.length; index++) {

    if (numerosMayoresA10[index]>10) {
        nuevoArrray.push(numerosMayoresA10[index]);
    document.writeln(`${numerosMayoresA10[index]} </br>`);
    
}
}
console.log(nuevoArrray);

