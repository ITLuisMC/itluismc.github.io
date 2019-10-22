function updateDate() {
    var date = new Date();
    var anio = date.getFullYear();
    var spanD = document.getElementById('spanDate');
    spanD.innerHTML = anio;
}

updateDate();

if (location.pathname != '/home.html') {

    for (var i = 0; i < document.getElementsByClassName('but-setts-hand').length; i++) {
        var ele = document.getElementsByClassName('but-setts-hand')[i];

        ele.addEventListener("click", settingsHand, false);

    }

    if (localStorage.getItem("hand") != "undefined") {
        var hand = localStorage.getItem("hand");
        mano(hand);
    } else {
        var hand = 'right';
        localStorage.setItem("hand", hand);
    }

    loadNavResEvent();

}

if (location.pathname == '/articles.html') {

    apiGetBlog('categories/').then( function(data) {

        var misCategorias = getCategoriesWordpress(data);

        printButsCategories(misCategorias);

        apiGetBlog('posts/').then( function(data) {
            var misPosts = getPostsWordpress(data);

            printLatestArticles(misPosts);

            printArtCategories(misPosts, misCategorias);

        });

    });

}

if (location.pathname == '/articles.html' || location.pathname == '/projects.html') {

    recorrerButtons();

}