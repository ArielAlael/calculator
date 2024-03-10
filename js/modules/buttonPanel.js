import { calculate, clear, display } from './calculate.js';

export default function buttonPanel() {
  const buttons = document.querySelectorAll('button');

  function handleclick({ target }) {
    const input = target.innerText;
    if (input === '=') {
      calculate();
      return;
    }
    if (input === 'C') {
      clear();
      return;
    }
    display.value += input;
  }

  buttons.forEach((button) => button.addEventListener('click', handleclick));
}
