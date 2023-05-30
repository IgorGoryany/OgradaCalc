import {choosingImage} from '../support/choosingImage';
import {handleCloseResult} from '../support/handleCloseResult';
import {result, select, total,} from '../variables/variables';
import {handleCalcTotalDetailsList} from '../calc/handleCalcTotalDetailsList';
import {sizesSupp} from "../support/sizesSupp";
import {fenceSideChoose} from "../support/fenceSideChoose";

export function print15And25Fence({
	                                  sideX,
	                                  sideY,
	                                  gate1,
	                                  gate2,
	                                  sideXRectangle,
	                                  halfXRectangle,
	                                  sideXJumper,
	                                  sideYRectangle,
	                                  halfYRectangle,
	                                  sideYJumper,
	                                  tube,
	                                  tubeInside,
	                                  countX,
	                                  countY,
	                                  gateCount,
	                                  rectangleCountX,
	                                  rectangleCountY,
	                                  rectangleSectionGate1,
	                                  rectangleInsideGate1,
	                                  rectangleSectionGate2,
	                                  rectangleInsideGate2,
	                                  rectangleGateCount,
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
			<span class="model">№&nbsp;${select.value}</span>
		</div>
		<div class="values">
			<div class="outside">
				<h2>${tube} X ${tube}</h2>
				<div class="frame${tube}">${sideY} X ${4 * countY}</div>
				<div class="frame${tube}">${sideX} X ${2 * (countX + gateCount)}</div>
			${gate1 ? `<div class="frame${tube}"> ${gate1} X 2</div>` : ''}
				${gate2 ? `<div class="frame${tube}"> ${gate2} X 2</div>` : ''}
			</div>
			<div class="inside">
				<h2>${tubeInside} X ${tubeInside}</h2>
				
				<div class="pattern25">${sideYRectangle} X ${
			rectangleCountY * 4 * countY
		}</div>
				
				${halfYRectangle ? `<div class="pattern25 lol">${halfYRectangle} X 8</div>` : ''}
				
				<div class="pattern25">${sideYJumper} X ${
			(rectangleCountY + 1) * countY * 2
		}</div>
				<br>
				<div class="pattern25">${sideXRectangle} X ${
			rectangleCountX * 2 * (countX + gateCount) + rectangleGateCount * 2
		}</div>
				
				${halfXRectangle
			? `<div class="pattern25">${halfXRectangle} X ${4 + (gateCount * 4)}</div>`
			: ''} 
				
				<div class="pattern25">
					${sideXJumper} X 
					${(rectangleCountX + 1) * (countX + gateCount) + rectangleGateCount + 2}
				</div> 
				<br>
				${
			rectangleSectionGate1
				? `<div class="gateRectangle">${rectangleSectionGate1} X 2</div>
				<div>${rectangleInsideGate1} X 2</div>`
				: `<div class="gateRectangle">${rectangleSectionGate2} X 2</div>
				<div>${rectangleInsideGate2} X 2</div>`
		}
			</div>
		</div>
	</div>
	<hr>
	`
	);
	const close = document.getElementsByClassName('close');

	close[0].addEventListener('click', handleCloseResult);

	if (total.classList.contains('active')) {
		handleCalcTotalDetailsList();
	}
}
