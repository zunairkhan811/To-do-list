import increaseHeight from "./increaseTextArea";
import checkstatus from "./statuscheck";
const displayTodo = (arr)=>{
    const taskList = document.querySelector('#task-list');
    console.log(taskList);
    arr.map((item)=>{
        taskList.innerHTML +=`
        <div id=${item.id} class="task-item">
            <input type="checkbox" ${item.completed ? 'checked' : '!checked' } >
            <textarea name="textarea" id="textarea" rows='1' cols="30" >${item.title}</textarea>
            <i class="fa fa-ellipsis-v"></i>
            <i class="fa fa-trash-o"></i>
        </div>
        `
        
    })
    increaseHeight(); 
    checkstatus();
}

export default displayTodo;