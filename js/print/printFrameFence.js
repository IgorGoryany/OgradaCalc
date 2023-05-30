import { choosingImage } from '../support/choosingImage';
import { handleCloseResult } from '../support/handleCloseResult';
import { sideXInput, sideYInput, total, select, result } from '../variables/variables';
import {handleCalcTotalDetailsList} from "../calc/handleCalcTotalDetailsList";
import {sizesSupp} from "../support/sizesSupp";

export function printFrameFence({
	sideX,
	sideY,

	gate1,
	gate2,

	tube,

	countX,
	countY,
}) {
	const number = document.getElementsByClassName('result')
		? document.getElementsByClassName('result').length + 1
		: 1;

	const image = choosingImage();

	const sizes = sizesSupp(image);
	
	result.insertAdjacentHTML(
		'afterbegin',

		`
	<div class="result">
		<span class="number">${number}.</span>
		<span class="close"></span>
		<div class="scheme">
			${sizes}
			<img alt="Ограда" src="${image}">
			<span class="model">№&nbsp;${select.value}</span>
		</div>
	
		<div class="values">
			<div class="inside">
				<h2>${tube} X ${tube}</h2>
				<div class="frame${tube}">${sideY} X ${4 * countY}</div>
				<div class="frame${tube}">${sideX} X ${2 * countX}</div>
				<div class="frame${tube}">${gate1} X 2</div>
				${gate2 ? `<div class="frame${tube}"> ${gate2} X 2</div>` : ''}
			</div>
		</div>
	</div>
	<hr />
	`
	);
	const close = document.getElementsByClassName('close');
	console.log(document.getElementsByClassName('result')[0]);
	close[0].addEventListener('click', handleCloseResult);

	if (total.classList.contains('active')) {
		handleCalcTotalDetailsList();
	}
}
