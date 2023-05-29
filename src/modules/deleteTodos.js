import setLocal from './setLocal.js';
import getLocal from './getLocal.js';

const deleteArray = (arr, id) => {
  const newarr = arr.filter((item) => item.id !== id);
  setLocal(newarr);
  getLocal();
};

const deleteTodos = (arr) => {
  const trashicon = document.querySelectorAll('.trash-icon');
  trashicon.forEach((item) => {
    item.addEventListener('click', (e) => {
      deleteArray(arr, e.target.parentElement.id);
    });
  });
};

export default deleteTodos;