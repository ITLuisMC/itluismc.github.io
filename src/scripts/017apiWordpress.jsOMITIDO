function apiGetBlog(loquequiero) {
	var req = new XMLHttpRequest();
	var url = 'https://public-api.wordpress.com/rest/v1.1/sites/itluismc.wordpress.com/' + loquequiero;
	return new Promise( function(resolve, rejection) {
		req.open('GET', url, true);
		req.send(null);
		req.onreadystatechange = function() {
			if (req.readyState == 4) {
				if (req.status == 200) {
					var respuesta = JSON.parse(req.responseText);
					resolve(respuesta);
				} else {
					rejection(console.log("Error loading page\n"));
				}
			}
		};
	});
}

function getPostsWordpress(data) {

	datos = data.posts;

	var modPosts = [];

	datos.forEach( function (element) {

		function Post(id, url, categorias, contenido, fecha, resumen, titulo, tipo) {
			this.id = id;
			this.url = url;
			this.categorias = categorias;
			this.contenido = contenido;
			this.fecha = fecha;
			this.resumen = resumen;
			this.titulo = titulo;
			this.tipo = tipo;
		}

		var categoriesA = element.categories;
		var categorias = [];

		for (var key in categoriesA) {
			categorias.push(categoriesA[key].slug);
		}

		var miPost = new Post(
			element.ID,
			element.URL,
			categorias,
			element.content,
			element.date,
			element.excerpt,
			element.title,
			element.type
		);

		modPosts.push(miPost);

	});

	return modPosts;

}

function getCategoriesWordpress(data) {

	datos = data.categories;

	var modCategorias = [];

	function Categoria(id, feed, descripcion, nombre, articulos, slug) {
		this.id = id;
		this.feed = feed;
		this.descripcion = descripcion;
		this.nombre = nombre;
		this.articulos = articulos;
		this.slug = slug;
	}

	datos.forEach(function (element) {
		if (element.slug!='redes-y-sistemas') {
			var miCategoria = new Categoria(
				element.ID,
				element.feed_url,
				element.description,
				element.name,
				element.post_count,
				element.slug
			);
	
			modCategorias.push(miCategoria);
		}

	});

	return modCategorias;

}