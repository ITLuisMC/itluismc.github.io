function printLatestArticles(dato) {

	var contentArts = document.getElementById('latest-arts');

	dato.forEach(function (element) {

		var art = document.createElement("ARTICLE");
		var h3 = document.createElement("H3");
		var span = document.createElement("SPAN");
		var div = document.createElement("DIV");
		var a = document.createElement("A");

		contentArts.appendChild(art);
		contentArts.lastChild.classList.add("article");
		contentArts.lastChild.classList.add("animated");
		contentArts.lastChild.classList.add("fadeInUp");
		contentArts.lastChild.classList.add("slow");
		contentArts.lastChild.appendChild(h3).innerHTML = element.titulo;
		contentArts.lastChild.appendChild(span).innerHTML = 'Categoria: ' + element.categorias[0];
		contentArts.lastChild.appendChild(div).innerHTML = element.resumen;
		contentArts.lastChild.appendChild(a).innerHTML = 'Más en mi blog';
		contentArts.lastChild.lastChild.setAttribute("href", element.url);
		contentArts.lastChild.lastChild.setAttribute("target", 'blank');

	});
}

function printButsCategories(dato) {

	var ulSubMenuCat = document.getElementById('subMenuCategories');

	dato.forEach(function (element) {

		if (element.articulos != 0) {
			var li = document.createElement("LI");
			var button = document.createElement("BUTTON");
			ulSubMenuCat.appendChild(li);
			ulSubMenuCat.lastChild.appendChild(button);
			ulSubMenuCat.lastChild.firstChild.classList.add('but');
			ulSubMenuCat.lastChild.firstChild.classList.add('butAside');
			ulSubMenuCat.lastChild.firstChild.setAttribute("title", element.slug);
			ulSubMenuCat.lastChild.firstChild.innerHTML = element.nombre;
			ulSubMenuCat.lastChild.firstChild.addEventListener('click', mostrarObjetivo, false);
		}

	});

	var li = document.createElement("LI");
	var button = document.createElement("BUTTON");

	ulSubMenuCat.appendChild(li);
	ulSubMenuCat.lastChild.appendChild(button);
	ulSubMenuCat.lastChild.firstChild.classList.add('but');
	ulSubMenuCat.lastChild.firstChild.classList.add('butAside');
	ulSubMenuCat.lastChild.firstChild.setAttribute("title", 'Todas');
	ulSubMenuCat.lastChild.firstChild.innerHTML = 'Todas';
	ulSubMenuCat.lastChild.firstChild.addEventListener('click', mostrarObjetivo, false);

}

function printArtCategories(arts, catgs) {

	var arrayArts = arts;
	var contentArts = document.getElementsByClassName('articles')[0];
	var arrayCatgs = [];

	catgs.forEach(function (element) {

		if (element.articulos != 0) {
			arrayCatgs.push(element);
		}

	});

	for (var index = 0; index < arrayCatgs.length; index++) {

		var elemen = arrayCatgs[index];
		var art = document.createElement("ARTICLE");
		var ul = document.createElement("UL");
		var h3 = document.createElement("H3");
		var span = document.createElement("SPAN");
		var p = document.createElement("P");
		var a = document.createElement("A");

		contentArts.appendChild(art);
		contentArts.lastChild.classList.add('clOculto');
		contentArts.lastChild.classList.add('categoriesBlog');
		contentArts.lastChild.classList.add('article');
		// contentArts.lastChild.classList.add("article");
		contentArts.lastChild.classList.add("animated");
		contentArts.lastChild.classList.add("fadeInUp");
		contentArts.lastChild.classList.add("slow");
		contentArts.lastChild.setAttribute("id", elemen.slug);
		contentArts.lastChild.appendChild(h3).innerHTML = elemen.nombre;
		contentArts.lastChild.firstChild.appendChild(span).innerHTML = ' / ';
		contentArts.lastChild.lastChild.appendChild(a).innerHTML = 'rss';
		contentArts.lastChild.lastChild.lastChild.setAttribute("href", elemen.feed);
		contentArts.lastChild.lastChild.lastChild.classList.add("links");
		contentArts.lastChild.appendChild(p).innerHTML = elemen.descripcion;
		contentArts.lastChild.appendChild(ul);
		contentArts.lastChild.lastChild.classList.add("lists-cat");

	}

	arrayArts.forEach(function (element) {

		var artConc = document.getElementById(element.categorias[0]);
		var ulConcu = artConc.children[2];
		var li = document.createElement("LI");
		var a = document.createElement("A");

		ulConcu.appendChild(li);
		ulConcu.lastChild.appendChild(a).innerHTML = element.titulo;
		ulConcu.lastChild.lastChild.setAttribute("href", element.url);
		ulConcu.lastChild.lastChild.setAttribute("target", 'blank');
		ulConcu.lastChild.lastChild.classList.add("links");

	});

}