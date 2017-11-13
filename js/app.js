var btnmenu = document.getElementById('menu');

function showMenu() { /*1°Declaramos nuestra funcion*/
    /*console.log('Funcion');verificamos si app.js esta enlazado con html*/
    var menu = document.getElementById('options-menu');
    /*Comprobamos como alternamos nuestras ocpiones de nuestron memu*/
    if (menu.classList.contains('disabled-menu')) { /*containe->verifica si el elemento menu contiene la clase que escribiremos entre los parentesis */
        console.log('mostrar');
        /*MOSTRAMOS NUESTRAS OPCIONES DE MENU */
        menu.classList.add('enabled-menu'); /*Metodo classList->Nos permite manipular las clases*/
        menu.classList.remove('disabled-menu');
    } else {
        console.log('ocultar'); /*se muestran los elementos y queremos ocultarlo*/
        /*ESCONDEMOS NUESTRAS OPCIONES*/
        menu.classList.add('disabled-menu');
        menu.classList.remove('enabled-menu');
    }
}

/*2°Detonamos nuestra funcion mediante el evento (click)*/
btnmenu.addEventListener('click', showMenu);