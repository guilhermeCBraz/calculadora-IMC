import { AlertError } from './alert-error.js';
import { Modal } from './modal.js';
import { calculateIMC, notANumber } from './utils.js';

// variables
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.oninput = () => AlertError.close();

form.onsubmit = function (event) {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNotANumber) {
    AlertError.open();
    return;
  }

  const result = calculateIMC(weight, height);
  displayResultMessage(result);
}


function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`;
  Modal.message.innerText = message;
  Modal.open();
}