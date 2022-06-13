import algorithmLuna from '../symbols';
import definePS, { paymentSystems } from '../numbers';

describe('validity of bank card number', () => {
  test('correct number', () => {
    expect(algorithmLuna('5596702064700990')).toBe(true);
  });

  test('wrong number', () => {
    expect(algorithmLuna('5596702065000990')).toBe(false);
  });
});

describe('displaying the name of the payment system', () => {
  test.each([
    ['full number', '5596702064700990', 'Diners Club - North America'],
    ['partial number', '55', 'Diners Club - North America'],
    ['number', 55, '\u2713'],
  ])('title displayed', (_, input, expected) => {
    expect(definePS(input, paymentSystems)).toBe(expected);
  });

  test.each([
    ['full number', '5596702064700990', '\u2713'],
    ['partial number', '55', '\u2713'],
  ])('title displayed', (_, input, expected) => {
    expect(definePS(input, paymentSystems)).not.toBe(expected);
  });

  test('title not displayed', () => {
    expect(definePS('5596702065000990')).toBe('\u2713');
  });
});
