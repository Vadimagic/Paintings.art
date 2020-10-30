import forms from './modules/forms';
import modals from './modules/modals';
import sliders from './modules/sliders';
import mask from './modules/mask'
import checkTextInputs from './modules/checkTextInputs'
import showMoreStyles from './modules/showMoreStyles'

window.addEventListener("DOMContentLoaded", () => {
	'use strict';

	modals();
	sliders(".feedback-slider-item", "hor", ".main-prev-btn", ".main-next-btn");
	sliders(".main-slider-item", "ver");
	forms();
	mask('[name="phone"]');
	checkTextInputs('[name="name"]');
	checkTextInputs('[name="message"]');
	showMoreStyles('.button-styles', '.styles-2')
})