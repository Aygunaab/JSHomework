let list = document.querySelectorAll('.list');
let imgbox = document.querySelectorAll('.image');

for (let i = 0; i < list.length; i++) {
	list[i].addEventListener('click', function() {
		for (let j = 0; j < list.length; j++) {
			list[j].classList.remove('active');
		}
		this.classList.add('active');

		let dataFilter = this.getAttribute('data-filter');
		for (let k = 0; k < imgbox.length; k++) {
			imgbox[k].classList.remove('active');
			imgbox[k].classList.add('hide');
			if (imgbox[k].getAttribute('data-item') == dataFilter || dataFilter == 'all') {
				imgbox[k].classList.remove('hide');
				imgbox[k].classList.add('active');
			}
		}
	});
}
//second task js
let input = document.querySelectorAll('#firstname');
let inputname = document.querySelectorAll('#sername');
let btnsub = document.querySelector('.submit');
let errormsg = document.querySelector('.error');
let errormsglenght = document.querySelector('.errorlenght');
let errormsgser = document.querySelector('.errorser');
let errormsglenghtser = document.querySelector('.errorlenghtser');
btnsub.onclick = function() {
	for (let i = 0; i < input.length; i++) {
		if (input[i].value.trim() && input[i].value.trim().length >= 5) {
			window.location.reload();
		} else if (input[i].value.trim() == '') {
			errormsg.classList.remove('d-none');
		} else {
			errormsg.classList.add('d-none');
			errormsglenght.classList.remove('d-none');
		}
		
	}
	for (let j = 0; j < inputname.length; j++) {
		if (inputname[j].value.trim() && inputname[j].value.trim().length >= 5) {
			window.location.reload();
		} else if (inputname[j].value.trim() == '') {
			errormsgser.classList.remove('d-none');
		} else {
			errormsgser.classList.add('d-none');
			errormsglenghtser.classList.remove('d-none');
		}
		
	}
};

