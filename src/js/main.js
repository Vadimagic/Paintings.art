import forms from './modules/forms';
import modals from './modules/modals';
import sliders from './modules/sliders';

window.addEventListener("DOMContentLoaded", () => {
	'use strict';

	modals();
	sliders(".feedback-slider-item", "hor", ".main-prev-btn", ".main-next-btn");
	sliders(".main-slider-item", "ver");
	forms();
})