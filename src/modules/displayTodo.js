import increaseHeight from "./increaseTextArea";
import checkstatus from "./statuscheck";
import applyCheck from "./applyStatusCheck";
const displayTodo = (arr)=>{
    const taskList = document.querySelector('#task-list');
    // console.log(taskList);
    taskList.innerHTML = '';
    if(arr!==null){
        arr.map((item)=>{
            taskList.innerHTML +=`
            <div id=${item.id} class="task-item">
                <input type="checkbox" ${item.completed ? 'checked' : '!checked' } >
                <textarea name="textarea" id="textarea" rows='1' cols="30" >${item.title}</textarea>
                <i class="fa fa-ellipsis-v dot-icon"></i>
                <i class="fa fa-trash-o trash-icon"></i>
            </div>
            `
            
        })
    }
    
    increaseHeight(); 
    checkstatus(arr);
    applyCheck();
}

export default displayTodo;