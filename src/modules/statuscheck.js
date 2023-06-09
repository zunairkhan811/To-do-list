import setLocal from './setLocal.js';
import getLocal from './getLocal.js';

const fiterArray = (arr, id) => {
  const newarr = [];
  arr.forEach((item) => {
    if (item.id === id) {
      item.completed = !item.completed;
    }
    newarr.push(item);
  });
  setLocal(newarr);
  getLocal();
};

const checkstatus = (arr) => {
  const checkbox = document.querySelectorAll('.task-item input');
  checkbox.forEach((item) => {
    item.addEventListener('click', (e) => {
      fiterArray(arr, e.target.parentElement.id);
    });
  });
};

export default checkstatus;
