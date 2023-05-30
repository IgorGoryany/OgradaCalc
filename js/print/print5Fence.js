import {choosingImage} from '../support/choosingImage';
import {handleCloseResult} from '../support/handleCloseResult';
import {result, select, total} from '../variables/variables';
import {handleCalcTotalDetailsList} from '../calc/handleCalcTotalDetailsList';
import {sizesSupp} from "../support/sizesSupp";
import {fenceSideChoose} from "../support/fenceSideChoose";

export function print5Fence({
	                            insideSideX,
	                            insideSideY,

	                            insideGate1,
	                            insideGate2,

	                            tubeInside,

	                            countX,
	                            countY,
                            }) {
	const number = document.getElementsByClassName('result')
		? document.getElementsByClassName('result').length + 1
		: 1;

	const image = choosingImage();

	const {sizes, isReverse} = sizesSupp(image);

	result.insertAdjacentHTML(
		'afterbegin',

		`
	<div class="result">
		<span class="number">${number}.</span>
		<span class="close"></span>
		<div class="scheme">
			${sizes}
			<img alt="Ограда" src="${image}" 
			class="${fenceSideChoose(isReverse)}" 
			/>
			<span class="model">№&nbsp${select.value}</span>
		</div>
	
		<div class="values">
			
			<div class="inside">
				<h2>${tubeInside} X ${tubeInside}</h2>
				<div class="frame${tubeInside}">${insideSideY} X ${4 * countY}</div>
				<div class="frame${tubeInside}">${insideSideX} X ${2 * countX}</div>
				<div class="frame${tubeInside}">${insideGate1} X 2</div>
				${
			insideGate2
				? `<div class="pattern${tubeInside}">${insideGate2} X 2</div>`
				: ''
		}
				</div>
		</div>
		
	</div>
	<hr />
	`
	);
	const close = document.getElementsByClassName('close');

	close[0].addEventListener('click', handleCloseResult);

	if (total.classList.contains('active')) {
		handleCalcTotalDetailsList();
	}
}
