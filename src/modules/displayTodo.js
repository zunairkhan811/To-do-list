import increaseHeight from './increaseTextArea';
import checkstatus from './statuscheck';
import applyCheck from './applyStatusCheck';
import deleteTodos from './deleteTodos';
import switchIcons from './switchIcon';
import editTodos from './editTodos';
import clearAllCompleted from './clearAll';

const displayTodo = (arr) => {
  const taskList = document.querySelector('#task-list');
  taskList.innerHTML = '';
  if(arr.length === 0){
    taskList.innerHTML = `
            <div class="task-item">
                
                <textarea name="textarea" id="textarea" rows='1' cols="30" >No Tasks Added Yet
                </textarea>
                
            </div>
            `;
            
            return;
  }
  if (arr !== null) {
    arr.map((item) => {
      taskList.innerHTML += `
            <div id=${item.id} class="task-item">
                <input type="checkbox" ${item.completed ? 'checked' : '!checked'} >
                <textarea name="textarea" id="textarea" rows='1' cols="30" >${item.title}
                </textarea>
                <i class="fa fa-ellipsis-v dot-icon"></i>
                <i class="fa fa-trash-o trash-icon"></i>
            </div>
            `;
    });
  }

  increaseHeight();
  checkstatus(arr);
  applyCheck();
  deleteTodos(arr);
  switchIcons();
  editTodos(arr);
  clearAllCompleted(arr);
};

export default displayTodo;