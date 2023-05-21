import displayTodo from "./displayTodo";

const setLocal = (arr)=>{
        localStorage.setItem('Todos',JSON.stringify(arr)); 
        displayTodo(arr);
}

export default setLocal;