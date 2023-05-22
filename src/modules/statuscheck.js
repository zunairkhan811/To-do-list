import setLocal from './setLocal.js';

const fiterArray = (arr, id) => {
  const newarr = [];
  arr.forEach((item) => {
    if (item.id === id) {
      item.completed = !item.completed;
    }
    newarr.push(item);
  });
  setLocal(newarr);
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
