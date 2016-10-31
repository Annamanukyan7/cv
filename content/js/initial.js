function change(event) {
	var link = document.getElementById('link');
	link.setAttribute ('href', 'content/styles/' + event.target.value + '.css');
}