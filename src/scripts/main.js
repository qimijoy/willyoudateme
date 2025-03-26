document.addEventListener('DOMContentLoaded', () => {
	const yesButton = document.getElementById('yes');
	const noButton = document.getElementById('no');

	yesButton.addEventListener('click', yes);
	noButton.addEventListener('click', moveButton);
	noButton.addEventListener('mouseover', moveButton);

	function yes() {
		document.querySelector('.image-container.hide').classList.remove('hide');
		document.querySelector('.content').classList.add('hide');
		document.body.classList.add('yes_background');
		document.querySelector('.header').innerText = 'Yeeeeees!!';
	}

	function moveButton() {
		const x = Math.random() * (window.innerWidth - yesButton.offsetLeft);
		const y = Math.random() * (window.innerHeight - noButton.offsetTop);

		noButton.style.left = `${x}px`;
		noButton.style.top = `${y}px`;
	}
});
