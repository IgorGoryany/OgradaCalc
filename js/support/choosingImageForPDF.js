import img2000X3000 from '../../img/2000X3000.pdf.svg';
import img2000X4000 from '../../img/2000X4000.pdf.svg';
import img2500X2000 from '../../img/2500X2000.pdf.svg';
import img3000X3000 from '../../img/3000X3000.pdf.svg';
import img3300X2000 from '../../img/3300X2000.pdf.svg';
import img3300X3000 from '../../img/3300X3000.pdf.svg';
import img3300X4000 from '../../img/3300X4000.pdf.svg';
import img4000X2000 from '../../img/4000X2000.pdf.svg';
import img4000X3000 from '../../img/4000X3000.pdf.svg';
import img4000X4000 from '../../img/4000X4000.pdf.svg';

export const choosingImageForPDF = (top, left) => {
	if (top >= 3400 && left > 3000) {
		return img4000X4000;
	}

	if (top === 3000 && left === 3000) {
		return img3000X3000;
	}

	if (top <= 3000 && left > 3000) {
		return img2000X4000;
	}

	if (top > 3000 && top < 3400 && left > 3000) {
		return img3300X4000;
	}

	if (top > 3000 && top < 3400 && left < 3000) {
		return img3300X2000;
	}

	if (top > 3000 && top < 3400 && left === 3000) {
		return img3300X3000;
	}

	if (top >= 3400 && left < 3000) {
		return img4000X2000;
	}

	if (top >= 3400 && left === 3000) {
		return img4000X3000;
	}

	if (top < 3000 && left === 3000) {
		return img2000X3000;
	}

	return img2500X2000;
	// if (top >= 3400 && left > 3000) {
	// 	return `<svg width="250" height="263" viewBox="0 0 250 263" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
	// 	<circle cx="125" cy="6" r="5"  stroke-width="2"/>
	// 	<path d="M18 6H121"  stroke-width="2"/>
	// 	<line x1="19" x2="19" y2="12"  stroke-width="2"/>
	// 	<circle cx="125" cy="236" r="5"  stroke-width="2"/>
	// 	<path d="M11 236H113"  stroke-width="2"/>
	// 	<line x1="112" y1="230" x2="112" y2="242"  stroke-width="2"/>
	// 	<circle cx="186" cy="236" r="5"  stroke-width="2"/>
	// 	<path d="M130 236H182"  stroke-width="2"/>
	// 	<line y1="223" x2="12" y2="223"  stroke-width="2"/>
	// 	<circle cx="6" cy="125" r="5" transform="rotate(-90 6 125)"  stroke-width="2"/>
	// 	<circle cx="6" cy="236" r="5" transform="rotate(-90 6 236)"  stroke-width="2"/>
	// 	<path d="M6 224L6 129"  stroke-width="2"/>
	// 	<circle cx="244" cy="125" r="5" transform="rotate(-90 244 125)"  stroke-width="2"/>
	// 	<circle cx="244" cy="236" r="5" transform="rotate(-90 244 236)"  stroke-width="2"/>
	// 	<path d="M244 232V137"  stroke-width="2"/>
	// 	<path d="M137 6H239"  stroke-width="2"/>
	// 	<line x1="138" x2="138" y2="12"  stroke-width="2"/>
	// 	<line x1="238" y1="19" x2="250" y2="19"  stroke-width="2"/>
	// 	<circle cx="6" cy="6" r="5" transform="rotate(-90 6 6)"  stroke-width="2"/>
	// 	<path d="M6 113L6 10"  stroke-width="2"/>
	// 	<line y1="112" x2="12" y2="112"  stroke-width="2"/>
	// 	<circle cx="244" cy="6" r="5" transform="rotate(-90 244 6)"  stroke-width="2"/>
	// 	<path d="M244 120V18"  stroke-width="2"/>
	// 	<line x1="238" y1="136" x2="250" y2="136"  stroke-width="2"/>
	// 	<line x1="190.5" y1="237.134" x2="233.801" y2="262.134"  stroke-width="2"/>
	// 	</svg>
	// 	`;
	// }

	// if (top === 3000 && left === 3000) {
	// 	return `<svg width="250" height="277" viewBox="0 0 250 277" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
	// 	<circle cx="244" cy="6" r="5" stroke-width="2"/>
	// 	<path d="M18 6H240" stroke-width="2"/>
	// 	<line x1="19" x2="19" y2="12" stroke-width="2"/>
	// 	<circle cx="174" cy="244" r="5" stroke-width="2"/>
	// 	<circle cx="6" cy="244" r="5" stroke-width="2"/>
	// 	<path d="M10 244H170" stroke-width="2"/>
	// 	<circle cx="244" cy="244" r="5" transform="rotate(90 244 244)" stroke-width="2"/>
	// 	<path d="M244 18V240" stroke-width="2"/>
	// 	<line x1="250" y1="19" x2="238" y2="19" stroke-width="2"/>
	// 	<circle cx="6" cy="6" r="5" transform="rotate(-90 6 6)" stroke-width="2"/>
	// 	<path d="M6 232L6 10" stroke-width="2"/>
	// 	<line y1="231" x2="12" y2="231" stroke-width="2"/>
	// 	<line x1="177.889" y1="245.63" x2="229.85" y2="275.63" stroke-width="2"/>
	// 	</svg>`;
	// }

	// if (top <= 3000 && left > 3000) {
	// 	return `<svg width="274" height="150" viewBox="0 0 274 150" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
	// 	<circle cx="132" cy="6" r="5" transform="rotate(-90 132 6)" stroke-width="2"/>
	// 	<circle cx="240" cy="6" r="5" transform="rotate(-90 240 6)" stroke-width="2"/>
	// 	<line x1="146" y1="6" x2="236" y2="6" stroke-width="2"/>
	// 	<circle cx="132" cy="144" r="5" transform="rotate(-90 132 144)" stroke-width="2"/>
	// 	<circle cx="240" cy="144" r="5" transform="rotate(-90 240 144)" stroke-width="2"/>
	// 	<line x1="136" y1="144" x2="226" y2="144" stroke-width="2"/>
	// 	<circle cx="6" cy="144" r="5" transform="rotate(-90 6 144)" stroke-width="2"/>
	// 	<line x1="10" y1="144" x2="120" y2="144" stroke-width="2"/>
	// 	<line x1="119" y1="150" x2="119" y2="138" stroke-width="2"/>
	// 	<circle cx="6" cy="6.1095" r="5" transform="rotate(-90 6 6.1095)" stroke-width="2"/>
	// 	<line x1="20" y1="6" x2="127" y2="6" stroke-width="2"/>
	// 	<line x1="145" y1="12" x2="145" stroke-width="2"/>
	// 	<line y1="131" x2="12" y2="131" stroke-width="2"/>
	// 	<line x1="227" y1="150" x2="227" y2="138" stroke-width="2"/>
	// 	<line x1="6" y1="132" x2="6" y2="11" stroke-width="2"/>
	// 	<circle cx="240" cy="61" r="5" stroke-width="2"/>
	// 	<line x1="240" y1="65" x2="240" y2="139" stroke-width="2"/>
	// 	<line x1="19" y1="12" x2="19" stroke-width="2"/>
	// 	<line x1="240.616" y1="56.6496" x2="272.755" y2="18.3473" stroke-width="2"/>
	// 	</svg>
	// 	`;
	// }

	// if (top > 3000 && top < 3400 && left > 3000) {
	// 	return `<svg width="250" height="263" viewBox="0 0 250 263" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
	// 	<circle cx="125" cy="6" r="5"  stroke-width="2"/>
	// 	<path d="M18 6H121"  stroke-width="2"/>
	// 	<line x1="19" x2="19" y2="12"  stroke-width="2"/>
	// 	<circle cx="186" cy="236" r="5"  stroke-width="2"/>
	// 	<circle cx="6" cy="125" r="5" transform="rotate(-90 6 125)"  stroke-width="2"/>
	// 	<circle cx="6" cy="236" r="5" transform="rotate(-90 6 236)"  stroke-width="2"/>
	// 	<path d="M6 222L6 129"  stroke-width="2"/>
	// 	<circle cx="244" cy="125" r="5" transform="rotate(-90 244 125)"  stroke-width="2"/>
	// 	<circle cx="6" cy="6" r="5" transform="rotate(-90 6 6)"  stroke-width="2"/>
	// 	<path d="M6 113L6 10"  stroke-width="2"/>
	// 	<line y1="112" x2="12" y2="112"  stroke-width="2"/>
	// 	<path d="M244 120L244 20"  stroke-width="2"/>
	// 	<line x1="238" y1="19" x2="250" y2="19"  stroke-width="2"/>
	// 	<line x1="190.5" y1="237.134" x2="233.801" y2="262.134"  stroke-width="2"/>
	// 	<path d="M11 236L181 235.999"  stroke-width="2"/>
	// 	<path d="M0 223H12"  stroke-width="2"/>
	// 	<circle cx="244" cy="6" r="5"  stroke-width="2"/>
	// 	<path d="M137 6H239"  stroke-width="2"/>
	// 	<line x1="138" x2="138" y2="12"  stroke-width="2"/>
	// 	<circle cx="244" cy="236" r="5" transform="rotate(90 244 236)"  stroke-width="2"/>
	// 	<path d="M244 137V232"  stroke-width="2"/>
	// 	<line x1="250" y1="138" x2="238" y2="138"  stroke-width="2"/>
	// 	</svg>
	// 	`;
	// }

	// if (top > 3000 && top < 3400 && left < 3000) {
	// 	return `<svg width="252" height="147" viewBox="0 0 252 147" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
	// 	<circle cx="246" cy="6" r="5" stroke-width="2"/>
	// 	<circle cx="122" cy="6" r="5" stroke-width="2"/>
	// 	<path d="M18 6H118" stroke-width="2"/>
	// 	<line x1="19" x2="19" y2="12" stroke-width="2"/>
	// 	<path d="M134 6H241" stroke-width="2"/>
	// 	<line x1="135" x2="135" y2="12" stroke-width="2"/>
	// 	<circle cx="178" cy="114" r="5" stroke-width="2"/>
	// 	<path d="M11 114L173 114" stroke-width="2"/>
	// 	<line x1="182.519" y1="115.341" x2="234.481" y2="145.342" stroke-width="2"/>
	// 	<line x1="246" y1="20" x2="246" y2="110" stroke-width="2"/>
	// 	<circle cx="246" cy="114" r="5" stroke-width="2"/>
	// 	<line x1="240" y1="19" x2="252" y2="19" stroke-width="2"/>
	// 	<line x1="6" y1="100" x2="6" y2="10" stroke-width="2"/>
	// 	<circle cx="6" cy="6" r="5" transform="rotate(-180 6 6)" stroke-width="2"/>
	// 	<circle cx="6" cy="114" r="5" transform="rotate(-180 6 114)" stroke-width="2"/>
	// 	<line x1="12" y1="101" y2="101" stroke-width="2"/>
	// 	</svg>
	// 	`;
	// }

	// if (top > 3000 && top < 3400 && left === 3000) {
	// 	return `<svg width="250" height="247" viewBox="0 0 250 247" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
	// 	<circle cx="174" cy="214" r="5" stroke-width="2"/>
	// 	<circle cx="6" cy="214" r="5" stroke-width="2"/>
	// 	<path d="M10 214H170" stroke-width="2"/>
	// 	<circle cx="244" cy="214" r="5" transform="rotate(90 244 214)" stroke-width="2"/>
	// 	<path d="M244 18V202" stroke-width="2"/>
	// 	<line x1="250" y1="19" x2="238" y2="19" stroke-width="2"/>
	// 	<circle cx="6" cy="6" r="5" transform="rotate(-90 6 6)" stroke-width="2"/>
	// 	<path d="M6 202L6 10" stroke-width="2"/>
	// 	<line y1="201" x2="12" y2="201" stroke-width="2"/>
	// 	<line x1="177.889" y1="215.63" x2="229.85" y2="245.63" stroke-width="2"/>
	// 	<circle cx="125" cy="6" r="5" stroke-width="2"/>
	// 	<path d="M18 6H121" stroke-width="2"/>
	// 	<line x1="19" x2="19" y2="12" stroke-width="2"/>
	// 	<circle cx="244" cy="6" r="5" stroke-width="2"/>
	// 	<path d="M137 6H239" stroke-width="2"/>
	// 	<line x1="138" x2="138" y2="12" stroke-width="2"/>
	// 	</svg>
	// 	`;
	// }

	// if (top >= 3400 && left < 3000) {
	// 	return `<svg width="252" height="141" viewBox="0 0 252 141" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
	// 	<line x1="246" y1="20" x2="246" y2="110"  stroke-width="2"/>
	// 	<circle cx="246" cy="6" r="5"  stroke-width="2"/>
	// 	<circle cx="246" cy="114" r="5"  stroke-width="2"/>
	// 	<line x1="6" y1="10" x2="6" y2="100"  stroke-width="2"/>
	// 	<circle cx="6" cy="6" r="5"  stroke-width="2"/>
	// 	<circle cx="6" cy="114" r="5"  stroke-width="2"/>
	// 	<circle cx="186" cy="114" r="5"  stroke-width="2"/>
	// 	<circle cx="122" cy="114" r="5"  stroke-width="2"/>
	// 	<path d="M11 114H108"  stroke-width="2"/>
	// 	<line x1="109" y1="108" x2="109" y2="120"  stroke-width="2"/>
	// 	<circle cx="122" cy="6" r="5"  stroke-width="2"/>
	// 	<path d="M18 6H118"  stroke-width="2"/>
	// 	<line x1="19" x2="19" y2="12"  stroke-width="2"/>
	// 	<path d="M134 6H241"  stroke-width="2"/>
	// 	<line x1="135" x2="135" y2="12"  stroke-width="2"/>
	// 	<path d="M127 114L181 114"  stroke-width="2"/>
	// 	<line x1="190.5" y1="115.134" x2="233.801" y2="140.134"  stroke-width="2"/>
	// 	<line x1="240" y1="19" x2="252" y2="19"  stroke-width="2"/>
	// 	<line y1="101" x2="12" y2="101"  stroke-width="2"/>
	// 	</svg>
	// 	`;
	// }

	// if (top >= 3400 && left === 3000) {
	// 	return `<svg width="250" height="153" viewBox="0 0 250 153" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
	// 	<circle cx="6" cy="126" r="5"  stroke-width="2"/>
	// 	<circle cx="244" cy="126" r="5" transform="rotate(90 244 126)"  stroke-width="2"/>
	// 	<path d="M244 18V121"  stroke-width="2"/>
	// 	<line x1="250" y1="19" x2="238" y2="19"  stroke-width="2"/>
	// 	<circle cx="6" cy="6" r="5" transform="rotate(-90 6 6)"  stroke-width="2"/>
	// 	<path d="M6 114L6 10"  stroke-width="2"/>
	// 	<line y1="113" x2="12" y2="113"  stroke-width="2"/>
	// 	<circle cx="125" cy="6" r="5"  stroke-width="2"/>
	// 	<path d="M18 6H121"  stroke-width="2"/>
	// 	<line x1="19" x2="19" y2="12"  stroke-width="2"/>
	// 	<circle cx="125" cy="126" r="5"  stroke-width="2"/>
	// 	<path d="M11 126L111 126"  stroke-width="2"/>
	// 	<circle cx="186" cy="126" r="5"  stroke-width="2"/>
	// 	<path d="M130 126L181 126"  stroke-width="2"/>
	// 	<line x1="112" y1="120" x2="112" y2="132"  stroke-width="2"/>
	// 	<line x1="190.5" y1="127.134" x2="233.801" y2="152.134"  stroke-width="2"/>
	// 	<circle cx="244" cy="6" r="5"  stroke-width="2"/>
	// 	<path d="M137 6H239"  stroke-width="2"/>
	// 	<line x1="138" x2="138" y2="12"  stroke-width="2"/>
	// 	</svg>
	// 	`;
	// }

	// if (top < 3000 && left === 3000) {
	// 	return `<svg width="250" height="277" viewBox="0 0 250 277" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
	// 	<circle cx="244" cy="6" r="5" stroke-width="2"/>
	// 	<circle cx="174" cy="244" r="5" stroke-width="2"/>
	// 	<circle cx="6" cy="244" r="5" stroke-width="2"/>
	// 	<path d="M10 244H170" stroke-width="2"/>
	// 	<circle cx="244" cy="244" r="5" transform="rotate(90 244 244)" stroke-width="2"/>
	// 	<path d="M244 18V240" stroke-width="2"/>
	// 	<line x1="250" y1="19" x2="238" y2="19" stroke-width="2"/>
	// 	<circle cx="6" cy="6" r="5" transform="rotate(-90 6 6)" stroke-width="2"/>
	// 	<path d="M6 232L6 10" stroke-width="2"/>
	// 	<line y1="231" x2="12" y2="231" stroke-width="2"/>
	// 	<line x1="177.889" y1="245.63" x2="229.85" y2="275.63" stroke-width="2"/>
	// 	<path d="M18 6H240" stroke-width="2"/>
	// 	<line x1="19" x2="19" y2="12" stroke-width="2"/>
	// 	</svg>
	// 	`;
	// }

	// return `<svg width="236" height="147" viewBox="0 0 236 147" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg">
	// <line x1="230" y1="20" x2="230" y2="110" stroke-width="2"/>
	// <circle cx="230" cy="6" r="5" stroke-width="2"/>
	// <circle cx="230" cy="114" r="5" stroke-width="2"/>
	// <circle cx="6" cy="6" r="5" stroke-width="2"/>
	// <circle cx="6" cy="114" r="5" stroke-width="2"/>
	// <circle cx="160" cy="114" r="5" stroke-width="2"/>
	// <path d="M18 6H225" stroke-width="2"/>
	// <line x1="6" y1="10" x2="6" y2="100.196" stroke-width="2"/>
	// <line y1="101" x2="12" y2="101" stroke-width="2"/>
	// <line x1="19" x2="19" y2="12" stroke-width="2"/>
	// <path d="M11 114L155 114" stroke-width="2"/>
	// <line x1="164.519" y1="115.341" x2="216.481" y2="145.342" stroke-width="2"/>
	// <line x1="224" y1="19" x2="236" y2="19" stroke-width="2"/>
	// </svg>
	// `;
};
