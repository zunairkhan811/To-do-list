import setLocal from './setLocal.js';
import getLocal from './getLocal.js';

const editedArray = (arr, text, id) => {
  arr.forEach((item) => {
    if (item.id === id) {
      item.title = text;
    }
    return arr;
  });

  setLocal(arr);
  getLocal();
};
const editTodos = (arr) => {
  const textarea = document.querySelectorAll('#textarea');
  textarea.forEach((item) => {
    item.addEventListener('dblclick', (e) => {
      const editText = e.target.value;
      const { id } = e.target.parentElement;
      editedArray(arr, editText.trim(), id);
    });
  });
};

export default editTodos;