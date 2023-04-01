import statusCompleted from './statuscompleted.js';
import statusNotCompleted from './statusnotcompleted.js';

export default function interactive() {
  const checkbox = document.querySelectorAll('#check-box');
  const textareaInput = document.querySelectorAll('.tasks-text');
  checkbox.forEach((el, i) => {
    el.addEventListener('click', () => {
      if (el.checked === true) {
        textareaInput[i].classList.toggle('changetext');
        statusCompleted(i);
      } else {
        textareaInput[i].classList.remove('changetext');
        statusNotCompleted(i);
      }
    });
  });
}