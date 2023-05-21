import increaseHeight from "./increaseTextArea";
const displayTodo = (arr)=>{
const taskList = document.querySelector('#task-list');
console.log(taskList);
arr.map((item)=>{
    taskList.innerHTML +=`
    <div id=${item.id} class="task-item">
        <input type="checkbox" ${item.completed ? 'checked' : '!checked' } >
        <textarea name="title" id="title" rows='1' cols="30" >${item.title}</textarea>
        <i class="fa fa-ellipsis-v"></i>
        <i class="fa fa-trash-o"></i>
    </div>
    `
    increaseHeight();
})
}

export default displayTodo;