import increaseHeight from './increaseTextArea.js';
import checkstatus from './statuscheck.js';
import applyCheck from './applyStatusCheck.js';
import deleteTodos from './deleteTodos.js';
import switchIcons from './switchIcon.js';
import editTodos from './editTodos.js';
import clearAllCompleted from './clearAll.js';

const displayTodo = (arr) => {
  const taskList = document.querySelector('#task-list');
  taskList.innerHTML = '';
  if (arr === null || arr.length === 0) {
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
      return taskList;
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