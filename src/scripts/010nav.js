function cerrarMenuResponsive() {

    var navResponsive = document.getElementById('nav-resp');

    navResponsive.classList.add('clOculto');
    document.getElementById('menu').classList.add('clOculto');
    document.getElementById('settings').classList.add('clOculto');
}

function abrirMenuResponsive(e) {

    var navResponsive = document.getElementById('nav-resp');

    var eTarget = e.target;

    var idObjetivo = document.getElementById(e.target.title);

    idObjetivo.classList.remove('clOculto');
    navResponsive.classList.remove('clOculto');

}

function loadNavResEvent() {

    var el = document.getElementsByClassName('nav-button-res');

    for (var index = 0; index < el.length; index++) {

        var element = el[index];
        var buttonNav = element.children[0];

        buttonNav.addEventListener("click", abrirMenuResponsive, false);

    }

    var spanNavResp = document.getElementById('nav-resp').children[0].children[0];
    spanNavResp.addEventListener("click", cerrarMenuResponsive, false);

}