
const idioma = parseInt(prompt("Ingresa el idioma  1-Español 2-Ingles 3-Frances 4-Chino 5-Aleman 6-Italiano 7-Portugues"));

    switch (idioma) {
        case 1:
            document.writeln("Hola Mundo");
            break;
        case 2:
            document.writeln("Hello World");
            break;
        case 3:
            document.writeln("Bonjour le monde");
            break;
        case 4:
            document.writeln("Nǐ hǎo shìjiè");
            break;
        case 5:
            document.writeln("Hallo Welt");
            break;
        case 6:
            document.writeln("Ciao mondo");
            break;
        case 7:
            document.writeln("olá mundo");
            break;
        default:
            document.writeln("Ingresaste una opcion erronea.")
    }