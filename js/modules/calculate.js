import copyToClipboard from './copyToClipboard.js';

export const display = document.getElementById('display');
export const regexExpressions = /^[0-9+\-*/().\s]+$/;

export const clear = () => (display.value = '');

export function calculate() {
  try {
    if (display.value && regexExpressions.test(display.value)) {
      const calc = eval(display.value);
      display.value = calc;
      copyToClipboard(calc);
    } else throw new Error('Expressão inválida!');
  } catch (error) {
    alert('⚡ Erro: ' + error.message);
    display.value = '';
  }
}
