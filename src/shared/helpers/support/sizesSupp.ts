import img2000X4000 from '../../img/2000X4000.svg';
import img2000X4000pdf from '../../img/pdfIcons/2000X4000.png';
import img2000X4000pdfLeft from '../../img/pdfIcons/leftIcons/2000X4000left.png';

export function sizesSupp(image: string): boolean {
  let isReverse = false;

  if (
    image === img2000X4000 ||
    image === img2000X4000pdf ||
    image === img2000X4000pdfLeft
  ) {
    isReverse = true;
  }
  return isReverse;
}
