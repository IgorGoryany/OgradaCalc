'strict mode';

import {
	calc,
	select,
	sideXInput,
	sideYInput,
	total,
	totalCalc,
	jsDoc,
} from './variables/variables';
import { distributionLogic } from './distribution/distributionLogic';
import { handleCalcTotalDetailsList } from './calc/handleCalcTotalDetailsList';
import { jsPDFPrint } from './js-pdf/jsPDF';

(function () {
	// sideXInput.value = 3200;
	// sideYInput.value = 2000;

	jsDoc.addEventListener('click', jsPDFPrint);

	document.getElementById('date').innerText = String(new Date().getFullYear());

	calc.addEventListener('click', handleCalc);
	// calc.addEventListener('click', Export2Word);
	sideXInput.addEventListener('keypress', handlePress);
	sideYInput.addEventListener('keypress', handlePress);
	totalCalc.addEventListener('click', handleTotalCalc);
	document
		.getElementById('leftFence')
		.addEventListener('click', handleLeftFence);

	function handleLeftFence(e) {
		e.target.children[0].classList.toggle('active');
	}

	function handleTotalCalc(e) {
		e.target.classList.toggle('active');

		total.classList.toggle('active');

		if (e.target.classList.contains('active')) {
			e.target.innerText = 'Свернуть';
		} else {
			e.target.innerText = 'Список деталей';
		}

		if (total.classList.contains('active')) {
			handleCalcTotalDetailsList();
		}
	}

	function handlePress(e) {
		if (isNaN(e.key) || e.target.value + e.key > 10000) {
			e.preventDefault();
		}
		if (e.key === 'Enter' && sideXInput.value && sideYInput.value) {
			handleCalc();
		}
	}

	function handleCalc() {
		if (!select.value) {
			return alert('Выбери модель');
		}
		if (+sideXInput.value && +sideYInput.value) {
			distributionLogic(+sideXInput.value, +sideYInput.value);

			sideXInput.value = '';
			sideYInput.value = '';
		} else {
			alert('Ты не все ввел!');
		}
	}
})();
