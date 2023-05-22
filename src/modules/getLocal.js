import displayTodo from './displayTodo';

const getLocal = () => {
  const arr = JSON.parse(localStorage.getItem('Todos'));
  displayTodo(arr);
};

export default getLocal;