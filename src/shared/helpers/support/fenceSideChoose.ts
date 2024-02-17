export function fenceSideChoose<T>(
  isReverse: boolean,
  isLeft: boolean,
  reverseX: T,
  reverse: T,
) {
  if (isLeft && isReverse) {
    return reverseX;
  }

  if (isLeft) return reverse;

  return '';
}
