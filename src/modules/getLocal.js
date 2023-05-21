import displayTodo from "./displayTodo";
const getLocal = ()=>{
    let arr = JSON.parse(localStorage.getItem('Todos'));
      displayTodo(arr);
}

export default getLocal;