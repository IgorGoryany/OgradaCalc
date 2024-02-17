import img2000X3000 from '../../img/2000X3000.svg';
import img2000X4000 from '../../img/2000X4000.svg';
import img2500X2000 from '../../img/2500X2000.svg';
import img3000X3000 from '../../img/3000X3000.svg';
import img3300X2000 from '../../img/3300X2000.svg';
import img3300X3000 from '../../img/3300X3000.svg';
import img3300X4000 from '../../img/3300X4000.svg';
import img4000X2000 from '../../img/4000X2000.svg';
import img4000X3000 from '../../img/4000X3000.svg';
import img4000X4000 from '../../img/4000X4000.svg';

export function choosingImage(sideX: number, sideY: number) {
  if (sideX >= 3400 && sideY > 3000) {
    return img4000X4000;
  }

  if (sideX === 3000 && sideY === 3000) {
    return img3000X3000;
  }

  if (sideX <= 3000 && sideY > 3000) {
    return img2000X4000;
  }

  if (sideX > 3000 && sideX < 3400 && sideY > 3000) {
    return img3300X4000;
  }

  if (sideX > 3000 && sideX < 3400 && sideY < 3000) {
    return img3300X2000;
  }

  if (sideX > 3000 && sideX < 3400 && sideY === 3000) {
    return img3300X3000;
  }

  if (sideX >= 3400 && sideY < 3000) {
    return img4000X2000;
  }

  if (sideX >= 3400 && sideY === 3000) {
    return img4000X3000;
  }

  if (sideX < 3000 && sideY === 3000) {
    return img2000X3000;
  }

  return img2500X2000;
}
