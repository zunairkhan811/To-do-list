import displayTodo from "./displayTodo";
const getLocal = ()=>{
    let objStr = localStorage.getItem('Todos');
    if(objStr!==null){
      let arr = JSON.parse(objStr);
      console.log(arr);
      displayTodo(arr);
    }
}

export default getLocal;