import img2000X3000 from '../../img/pdfIcons/2000X3000.png';
import img3000X3000 from '../../img/pdfIcons/3000X3000.png';
import img3300X3000 from '../../img/pdfIcons/3300X3000.png';
import img3300X4000 from '../../img/pdfIcons/3300X4000.png';
import img4000X4000 from '../../img/pdfIcons/4000X4000.png';
import img2000X3000left from '../../img/pdfIcons/leftIcons/2000X3000left.png';
import img3000X3000left from '../../img/pdfIcons/leftIcons/3000X3000left.png';
import img3300X3000left from '../../img/pdfIcons/leftIcons/3300X3000left.png';
import img3300X4000left from '../../img/pdfIcons/leftIcons/3300X4000left.png';
import img4000X4000left from '../../img/pdfIcons/leftIcons/4000X4000left.png';

export const isSquareImage = (image: string) =>
  image === img3000X3000 ||
  image === img3300X3000 ||
  image === img4000X4000 ||
  image === img3300X4000 ||
  image === img2000X3000 ||
  image === img3000X3000left ||
  image === img3300X3000left ||
  image === img3300X4000left ||
  image === img4000X4000left ||
  image === img2000X3000left;
