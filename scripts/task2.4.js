'use strict';

let states = [];
let button = document.getElementById('btn_undo');
let input = document.getElementById('text_field');
let timer;
let interval = 100;
input.addEventListener("input", function() {
	clearTimeout(timer);
	if (input.value) {
		timer = setTimeout(function() {
			states.push(input.value);
		}
		, interval);
	}
});
button.addEventListener('click', function() {
	if (states.length > 0) {
		states.pop();
		if (states.length === 0) {
			input.value = '';
		} else {
			input.value = states[states.length - 1];
		}
	}
});