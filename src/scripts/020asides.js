function mostrarObjetivo(e) {

    var eTarget = e.target;
    var titleE = eTarget.getAttribute('title').toString();
    var objetivoE = document.getElementById(titleE);
    var contenido = recorrerContent();
    var contenedores = contenido[0];
    var categorias = contenido[1];

    borrarClase('butAside', 'but-active');

    for (var index = 0; index < contenedores.length; index++) {

        var element = contenedores[index];

        element.classList.add("clOculto");

    }

    if (titleE == 'all' || titleE == 'Todas') {

        for (var i = 0; i < categorias.length; i++) {

            var categoria = categorias[i];

            categoria.classList.remove("clOculto");

        }

        var butsCats = document.getElementsByClassName('butAside');

        for (var ind = 0; ind < butsCats.length; ind++) {

            if (butsCats[ind].getAttribute('title') == 'categories') {
                butsCats[ind].classList.add('but-active');
            }

        }

    } else {

        objetivoE.classList.remove("clOculto");

    }

    eTarget.classList.add('but-active');

    var botonActivo = document.getElementsByClassName('but-active')[0];

    categorias.forEach(function (element) {

        if (botonActivo.getAttribute('title') == element.getAttribute('id')) {

            var botones = document.getElementsByClassName('butAside');

            for (var index = 0; index < botones.length; index++) {

                var elemento = botones[index];

                if (elemento.getAttribute('data') == 'categories') {
                    elemento.classList.add('but-active');
                }

            }

        }

    });

    var menu = document.getElementById("subMenuCategories");
    menu.classList.remove('clOculto');
    menu.style.visibility = 'hidden';

}

function showMenuCategories() {

    var menu = document.getElementById("subMenuCategories");

    if (menu.style.visibility == 'hidden') {
        menu.style.visibility = 'visible';
    } else {
        menu.style.visibility = 'hidden';
    }

}

function borrarClase(claseObjetives, claseToDelete) {

    var misBotonesAside = document.getElementsByClassName(claseObjetives);

    for (var index = 0; index < misBotonesAside.length; index++) {

        var element = misBotonesAside[index];
        element.classList.remove(claseToDelete);

    }

}

function recorrerButtons() {

    var misBotonesAside = document.getElementsByClassName('butAside');

    for (var i = 0; i < misBotonesAside.length; i++) {

        var boton = misBotonesAside[i];
        var botonText = boton.textContent.toLowerCase();

        boton.setAttribute('title', botonText);

        if (botonText == 'categories') {

            misBotonesAside[i].addEventListener('click', showMenuCategories, false);

        } else {

            misBotonesAside[i].addEventListener('click', mostrarObjetivo, false);

        }

    }

}

function recorrerContent() {

    var contenido = [];
    var containers;
    var datos;
    var categories;

    if (location.pathname == '/articles.html') {

        containers = [
            document.getElementById('blogIni'),
            document.getElementById('latest-arts'),
            document.getElementById('subMenuCategories')
        ];

        datos = document.getElementsByClassName('categoriesBlog');
        categories = [];

    } else if (location.pathname == '/projects.html') {

        containers = [];

        datos = document.getElementsByClassName('projects')[0].children;

        categories = [];

    }

    for (var i = 0; i < datos.length; i++) {
        var category = datos[i];
        categories.push(category);
        containers.push(category);
    }

    contenido.push(containers);
    contenido.push(categories);

    return contenido;

}