export function fenceElementsCount(isBigX: boolean, isBigY: boolean) {
  return {
    lockCountX: isBigX ? 2 : 1,
    divCountX: isBigX ? 2 : 1,
    pilarCountX: isBigX ? 3 : 2,
    lockCountY: isBigY ? 2 : 1,
    divCountY: isBigY ? 2 : 1,
    pilarCountY: isBigY ? 3 : 2,
  };
}
