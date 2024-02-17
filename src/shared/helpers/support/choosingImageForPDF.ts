import img2000X3000 from '../../img/pdfIcons/2000X3000.png';
import img2000X4000 from '../../img/pdfIcons/2000X4000.png';
import img2500X2000 from '../../img/pdfIcons/2500X2000.png';
import img3000X3000 from '../../img/pdfIcons/3000X3000.png';
import img3300X2000 from '../../img/pdfIcons/3300X2000.png';
import img3300X3000 from '../../img/pdfIcons/3300X3000.png';
import img3300X4000 from '../../img/pdfIcons/3300X4000.png';
import img4000X2000 from '../../img/pdfIcons/4000X2000.png';
import img4000X3000 from '../../img/pdfIcons/4000X3000.png';
import img4000X4000 from '../../img/pdfIcons/4000X4000.png';
import img2000X3000left from '../../img/pdfIcons/leftIcons/2000X3000left.png';
import img2000X4000left from '../../img/pdfIcons/leftIcons/2000X4000left.png';
import img2500X2000left from '../../img/pdfIcons/leftIcons/2500X2000left.png';
import img3000X3000left from '../../img/pdfIcons/leftIcons/3000X3000left.png';
import img3300X2000left from '../../img/pdfIcons/leftIcons/3300X2000left.png';
import img3300X3000left from '../../img/pdfIcons/leftIcons/3300X3000left.png';
import img3300X4000left from '../../img/pdfIcons/leftIcons/3300X4000left.png';
import img4000X2000left from '../../img/pdfIcons/leftIcons/4000X2000left.png';
import img4000X3000left from '../../img/pdfIcons/leftIcons/4000X3000left.png';
import img4000X4000left from '../../img/pdfIcons/leftIcons/4000X4000left.png';

export const choosingImageForPDF = (
  sideX: number,
  sideY: number,
  isLeft: boolean,
) => {
  if (sideX >= 3400 && sideY > 3000) {
    return isLeft ? img4000X4000left : img4000X4000;
  }

  if (sideX === 3000 && sideY === 3000) {
    return isLeft ? img3000X3000left : img3000X3000;
  }

  if (sideX <= 3000 && sideY > 3000) {
    return isLeft ? img2000X4000left : img2000X4000;
  }

  if (sideX > 3000 && sideX < 3400 && sideY > 3000) {
    return isLeft ? img3300X4000left : img3300X4000;
  }

  if (sideX > 3000 && sideX < 3400 && sideY < 3000) {
    return isLeft ? img3300X2000left : img3300X2000;
  }

  if (sideX > 3000 && sideX < 3400 && sideY === 3000) {
    return isLeft ? img3300X3000left : img3300X3000;
  }

  if (sideX >= 3400 && sideY < 3000) {
    return isLeft ? img4000X2000left : img4000X2000;
  }

  if (sideX >= 3400 && sideY === 3000) {
    return isLeft ? img4000X3000left : img4000X3000;
  }

  if (sideX < 3000 && sideY === 3000) {
    return isLeft ? img2000X3000left : img2000X3000;
  }

  return isLeft ? img2500X2000left : img2500X2000;
};
