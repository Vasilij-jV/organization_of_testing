/* eslint-disable no-continue */
export default function algorithmLuna(string) {
  let sum = 0;
  let count = 0;
  let controlCount = 0;
  const arrNumber = string.split('').map((elem) => Number(elem)).reverse();

  for (let i = 0; i < arrNumber.length; i += 1) {
    if ((i + 1) % 2 !== 0 && i !== 0) {
      sum += arrNumber[i];
      continue;
    }

    if ((i + 1) % 2 === 0) {
      count = String((arrNumber[i] * 2));
    }

    if (count.length === 2) {
      count = count.split('').reduce((acc, item) => Number(acc) + Number(item));
      sum += count;
    } else {
      sum += +count;
    }
  }

  controlCount = 10 - (sum % 10);
  if (controlCount === arrNumber[0] || controlCount === 10) {
    return true;
  }
  return false;
}
