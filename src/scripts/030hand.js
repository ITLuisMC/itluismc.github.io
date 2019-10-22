function saveHand(h) {
    localStorage.setItem("hand", h);
}

function mano(lado) {

    var hand;

    if (lado === null) {
        hand = 'right';
    } else {
        hand = lado;
    }

    var navResp = document.getElementsByClassName('but-setts-hand');

    if (hand=='left') {
        document.getElementById('idUno').classList.remove('clLeft');
        document.getElementById('idUno').classList.add('clRight');
        document.getElementById('idDos').classList.add('clLeft');
        document.getElementById('idDos').classList.remove('clRight');
    } else {
        document.getElementById('idUno').classList.add('clLeft');
        document.getElementById('idUno').classList.remove('clRight');
        document.getElementById('idDos').classList.remove('clLeft');
        document.getElementById('idDos').classList.add('clRight');
    }

    for (var index = 0; index < navResp.length; index++) {
        var element = navResp[index];

        element.classList.remove('but-active');
        if (element.title==hand) {
            element.classList.add('but-active');
        }

    }

    saveHand(hand);

    cerrarMenuResponsive();

}

function settingsHand(e) {

    var eTarget = e.target;
    var boton = eTarget.getAttribute('title').toString();

    mano(boton);

}
