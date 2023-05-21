import displayTodo from "./displayTodo";
const getLocal = ()=>{
    let objStr = JSON.parse(localStorage.getItem('Todos'));
      displayTodo(objStr);
}

export default getLocal;