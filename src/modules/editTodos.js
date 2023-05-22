import setLocal from "./setLocal";
const editedArray = (arr,text,id)=>{
    arr.forEach((item)=>{
        if(item.id === id){
            item.title = text;
        }
        return arr;
    })

    setLocal(arr);
}
const editTodos = (arr)=>{
    const mainbox = document.querySelector('#main-box');
    const textarea = document.querySelectorAll('#textarea');
    let previousTextarea = null;
    textarea.forEach((item)=>{
        item.addEventListener('dblclick',(e)=>{
            let editText = e.target.value;
            let id = e.target.parentElement.id;
            editedArray(arr,editText.trim(),id);
        })
        
    })
}

export default editTodos;