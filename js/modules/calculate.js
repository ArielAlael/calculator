import copyToClipboard from './copyToClipboard.js';

export const display = document.getElementById('display');

export const clear = () => (display.value = '');

export function calculate() {
  const isMathExpression = (value) => /^[0-9+\-*/().\s]+$/.test(value);
  try {
    if (display.value && isMathExpression(display.value)) {
      const calc = eval(display.value);
      display.value = calc;
      copyToClipboard(calc);
    } else throw new Error('Expressão inválida!');
  } catch (error) {
    alert('⚡ Erro: ' + error.message);
    display.value = '';
  }
}
