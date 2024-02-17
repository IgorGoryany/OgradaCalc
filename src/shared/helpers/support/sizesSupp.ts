import img2000X4000 from '../../img/2000X4000.svg';

export function sizesSupp(image: string): boolean {
  let isReverse = false;

  if (image === img2000X4000) {
    isReverse = true;
  }
  return isReverse;
}
