import forms from './modules/forms';
import modals from './modules/modals';
import sliders from './modules/sliders';
import mask from './modules/mask'
import checkTextInputs from './modules/checkTextInputs'
import showMoreStyles from './modules/showMoreStyles'
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/puctureSize';
import accordion from './modules/accordion';
import burger from './modules/burger';

document.addEventListener("DOMContentLoaded", () => {
	'use strict';

	modals();
	sliders(".feedback-slider-item", "hor", ".main-prev-btn", ".main-next-btn");
	sliders(".main-slider-item", "ver");
	forms();
	mask('[name="phone"]');
	checkTextInputs('[name="name"]');
	checkTextInputs('[name="message"]');
	showMoreStyles('.button-styles', '.styles-2');
	calc('#size', '#material', '#options', '.promocode', '.calc-price');
	filter();
	pictureSize('.sizes-block');
	accordion('.accordion-heading');
	burger('.burger', '.burger-menu');
})