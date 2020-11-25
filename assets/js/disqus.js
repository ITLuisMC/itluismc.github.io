//-DISQUS

 var disqus_config = function () {
	this.page.url = window.location.href; // Replace PAGE_URL with your page's canonical URL variable
	this.page.identifier = window.location.href; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function () { // DON'T EDIT BELOW THIS LINE
	var d = document,
		s = d.createElement('script');
	s.src = 'https://www-luismc-es.disqus.com/embed.js';
	s.setAttribute('data-timestamp', +new Date());
	(d.head || d.body).appendChild(s);
})();