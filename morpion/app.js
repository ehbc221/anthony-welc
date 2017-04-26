let i = 0;
const cases = document.querySelectorAll('.case');

function tour() {
	i++;
	return i % 2 === 0 ? 'O' : 'X';
}

function jouer() {
	if (!this.innerHtml) this.innerHtml = tour();
}

cases.forEach(el => el.addEventListener('click', jouer));
