import displayTodo from './displayTodo.js';
// import clearAllCompleted from './clearAll';

const getLocal = () => {
  const arr = JSON.parse(localStorage.getItem('Todos'));
  displayTodo(arr);
  // clearAllCompleted(arr)
};

export default getLocal;