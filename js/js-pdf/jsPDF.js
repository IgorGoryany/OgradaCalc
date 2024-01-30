import { jsPDF } from 'jspdf';
// import { choosingImageForPDF } from '../support/choosingImageForPDF';

const startTopPadding = 100;
const startLeftPadding = 30;
const dopPaddingToLeftNumber = 50;

const convertIntoMM = (offsetLeft) => (offsetLeft / 1310) * 210;

export const jsPDFPrint = () => {
	const doc = new jsPDF();

	let prevContainersHeigh = 0;

	const result = Array.from(
		document.getElementsByClassName('result')
	).reverse();

	result.forEach((container, indexOfContainer) => {
		const [number, , schemeBlock, valuesBlock] = container.children;
		const [numberTop, numberLeft, image] = schemeBlock.children;
		const [outsideValuesBlock, insideValueBlock] = valuesBlock.children;

		const isNewPage = !(indexOfContainer % 4) && indexOfContainer !== 0;

		if (isNewPage) {
			doc.addPage();
			prevContainersHeigh = 0;
		}

		let insideValueNode = null;
		const outsideValuesNode = Array.from(outsideValuesBlock.children).filter(
			(node) => node.tagName !== 'BR'
		);

		const offsets = {
			number: {
				left: startLeftPadding,
				top: number.offsetTop + prevContainersHeigh + startTopPadding,
			},
			schemeBlockTopNumber: {
				left: numberTop.offsetLeft + startLeftPadding + schemeBlock.offsetLeft,
				top:
					numberTop.offsetTop +
					startTopPadding +
					schemeBlock.offsetTop +
					prevContainersHeigh,
			},
			schemeBlockLeftNumber: {
				left: numberLeft.offsetLeft + startLeftPadding + schemeBlock.offsetLeft,
				top:
					numberLeft.offsetTop +
					startTopPadding +
					schemeBlock.offsetTop +
					prevContainersHeigh +
					dopPaddingToLeftNumber,
			},
			schemeBlockImage: {
				left: image.offsetLeft + startLeftPadding + schemeBlock.offsetLeft,
				top:
					image.offsetTop +
					startLeftPadding +
					schemeBlock.offsetTop +
					prevContainersHeigh,
			},
			outsideValues: outsideValuesNode.map((valueNode) => ({
				left:
					valueNode.offsetLeft +
					startLeftPadding +
					valuesBlock.offsetLeft +
					outsideValuesBlock.offsetLeft,
				top:
					valueNode.offsetTop +
					startTopPadding +
					valuesBlock.offsetTop +
					prevContainersHeigh,
			})),
		};

		if (insideValueBlock) {
			insideValueNode = Array.from(insideValueBlock.children).filter(
				(node) => node.tagName !== 'BR'
			);
			offsets.insideValue = insideValueNode.map((valueNode) => ({
				left:
					valueNode.offsetLeft +
					startLeftPadding +
					valuesBlock.offsetLeft +
					insideValueBlock.offsetLeft,
				top:
					valueNode.offsetTop +
					startTopPadding +
					valuesBlock.offsetTop +
					prevContainersHeigh,
			}));
		}
		doc.text(
			number.innerText,
			convertIntoMM(offsets.number.left),
			convertIntoMM(offsets.number.top)
		);

		doc.text(
			numberTop.innerText,
			convertIntoMM(offsets.schemeBlockTopNumber.left),
			convertIntoMM(offsets.schemeBlockTopNumber.top)
		);

		console.log(
			convertIntoMM(offsets.schemeBlockImage.left),
			convertIntoMM(offsets.schemeBlockImage.top),
			convertIntoMM(image.offsetHeight),
			convertIntoMM(image.offsetWidth)
		);

		// doc.addImage(
		// 	choosingImageForPDF(+numberTop.innerText, +numberLeft.innerText),
		// 	'JPEG',
		// 	convertIntoMM(offsets.schemeBlockImage.left),
		// 	convertIntoMM(offsets.schemeBlockImage.top),
		// 	convertIntoMM(image.offsetHeight),
		// 	convertIntoMM(image.offsetWidth)
		// );

		doc.text(
			numberLeft.innerText,
			convertIntoMM(offsets.schemeBlockLeftNumber.left),
			convertIntoMM(offsets.schemeBlockLeftNumber.top),
			{
				angle: 90,
				rotationDirection: 1,
			}
		);

		outsideValuesNode.forEach((node, index) => {
			doc.text(
				node.innerText,
				convertIntoMM(offsets.outsideValues[index].left),
				convertIntoMM(offsets.outsideValues[index].top)
			);
		});
		if (insideValueNode) {
			insideValueNode.forEach((node, index) => {
				doc.text(
					node.innerText,
					convertIntoMM(offsets.insideValue[index].left),
					convertIntoMM(offsets.insideValue[index].top)
				);
			});
		}

		prevContainersHeigh += container.offsetHeight + 80;
	});
	console.log(doc);
	doc.save('test.pdf');
};
