/* eslint-disable no-restricted-globals */
import './css/style.css';
import algorithmLuna from './symbols';
import definePS, { paymentSystems } from './numbers';

const input = document.getElementById('card-input');
const unicode = document.getElementById('unicode');
const output = document.querySelector('.paymentSystems');
let lengthSymbol = 0;
let arrSymbol = [];

input.addEventListener('input', () => {
  if (!document.getElementById('card-input').checkValidity()) {
    unicode.classList.remove('unicodeGreen');
    unicode.classList.add('unicodeRed');
  }

  if (document.getElementById('card-input').checkValidity()) {
    unicode.classList.remove('unicodeRed');
    unicode.classList.add('unicodeGreen');
  }

  /** Ограничение длины номера */

  if (isNaN(Number(document.getElementById('card-input').value))) {
    lengthSymbol = document.getElementById('card-input').value.length;
    arrSymbol = document.getElementById('card-input').value.split('');
    arrSymbol.splice(lengthSymbol - 1, 1);
    document.getElementById('card-input').value = arrSymbol.join('');
  }

  output.value = definePS(input.value, paymentSystems);
});

/** Валидация "платёжная система" */

input.addEventListener('change', (e) => {
  const stringValue = e.target.value;
  const booleanValue = algorithmLuna(stringValue);
  if (!booleanValue && (stringValue.length > 15 && stringValue.length < 20)) {
    const invalid = document.querySelector('.invalid');
    invalid.classList.add('showInvalid');
    setTimeout(() => {
      invalid.classList.remove('showInvalid');
    }, 3000);
  }
  if (booleanValue && (stringValue.length > 15 && stringValue.length < 20)) {
    document.getElementById('card-input').classList.add('valid');
  }
});
