import { calculate, clear, display } from './calculate.js';

export default function actionsKeyboard() {
  function setNumbersInDisplay(event) {
    const keyRegex = /[0-9\+\.\-\*\/]/;
    if (
      !event.ctrlKey &&
      !event.key.startsWith('F') &&
      keyRegex.test(event.key)
    ) {
      display.value += event.key;
    } else {
      event.preventDefault();
    }
  }

  const deleteLastCharacter = () =>
    (display.value = display.value.slice(0, -1));

  document.addEventListener('keydown', function (event) {
    setNumbersInDisplay(event);
    const keyPressed = event.key;

    if (keyPressed === 'Enter') calculate();
    else if (keyPressed.toLowerCase() === 'c') clear();
    else if (keyPressed === 'Backspace') deleteLastCharacter();
  });
}
