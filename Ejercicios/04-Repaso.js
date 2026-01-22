//Estación del año - Mostrar la estación correspondiente dependiendo del valor de la variable mes (Primavera, Otoño, Verano, Invierno).

const mes = parseInt(prompt("Ingresa el numero del mes  1-Enero 2-Febrero 3-Marzo 4-Abril 5-Mayo 6-Junio 7-Julio 8-Agosto 9-Septiembre 10-Octubre 11-Noviembre 12-Diciembre"));

    switch (mes) {
        case 12:
        case 1:
        case 2:
            document.writeln("Verano");
            break;
        case 3:
        case 4:
        case 5:
            document.writeln("Otoño");
            break;
        case 6:
        case 7:
        case 8:
            document.writeln("Invierno");
            break;
        case 9:
        case 10:
        case 11:
            document.writeln("Primavera");
            break;
        default:
            document.writeln("Ingresaste una opcion erronea.")
    }