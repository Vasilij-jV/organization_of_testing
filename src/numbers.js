/* eslint-disable no-prototype-builtins */
export const paymentSystems = {
  45: 'VISA',
  60: 'Discover',
  30: 'Diners Club - Carte Blanche',
  41: 'Visa Electron',
  48: 'Visa Electron',
  49: 'Visa Electron',
  52: 'MasterCard',
  53: 'MasterCard',
  35: 'JCB',
  36: 'Diners Club - International',
  63: 'InstaPayment',
  34: 'American Express (AMEX)',
  37: 'American Express (AMEX)',
  55: 'Diners Club - North America',
  54: 'Diners Club - North America',
  67: 'Maestro',
  50: 'Maestro',
  '06': 'Maestro',
  22: 'Мир',
};

export default function definePS(string, paymentSystemsObj) {
  let firstTwo;
  const unicode = '\u2713';

  if (string.length === 2 || string.length > 2) {
    firstTwo = +string.slice(0, 2);
  }

  for (const item in paymentSystemsObj) {
    if (paymentSystemsObj.hasOwnProperty(item) && (firstTwo === +item || firstTwo === '06') && (string.length === 2 || string.length > 2)) {
      return paymentSystemsObj[item];
    }
  }

  return unicode;
}

definePS('49587', paymentSystems);
