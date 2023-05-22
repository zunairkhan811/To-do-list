import displayTodo from './displayTodo.js';

const setLocal = (arr) => {
  localStorage.setItem('Todos', JSON.stringify(arr));
  displayTodo(arr);
};

export default setLocal;