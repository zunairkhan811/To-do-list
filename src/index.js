import './styles.css';
import clearbutton from '../modules/clearbutton.js';
import interactive from '../modules/interative.js';

const taskInputBtn = document.querySelector('#taskInputbtn');
const taskList = document.querySelector('#task-list');
const taskInput = document.querySelector('#add-task');
let userArray = [];
const objStr = localStorage.getItem('Tasks');
if (objStr != null) {
  userArray = JSON.parse(objStr);
}

function removetask(i) {
  const newArray = JSON.parse(localStorage.getItem('Tasks'));
  newArray.splice(i, 1);
  localStorage.setItem('Tasks', JSON.stringify(newArray));
  window.location.reload();
}
function savelocal(text, i) {
  const newArray = JSON.parse(localStorage.getItem('Tasks'));
  newArray[i].description = text;
  localStorage.setItem('Tasks', JSON.stringify(newArray));
  window.location.reload();
}

function editTask() {
  const removeiconId = document.querySelectorAll('#removeid');
  const doticon = document.querySelectorAll('#dotid');
  const textareaInput = document.querySelectorAll('.tasks-text');
  const taskdiv = document.querySelectorAll('.tasks');
  taskdiv.forEach((el, i) => {
    el.addEventListener('click', () => {
      doticon[i].classList.toggle('changedoticon');
      removeiconId[i].classList.toggle('changeremoveicon');
      el.addEventListener('dblclick', () => {
        savelocal(textareaInput[i].value, i);
      });

      removeiconId[i].addEventListener('click', () => {
        removetask(i);
      });
    });
  });
}

function displayList() {
  let section = '';
  if (!localStorage.getItem('Tasks') || userArray.length === 0) {
    section = `
      <div class="tasks"><label class="tasks-text" for="first">No Tasks added yet</label><span class="tasks-icon"></span></div>`;
    taskList.innerHTML = section;
  } else {
    userArray.forEach((user, i) => {
      section += `
          <div class="tasks" draggable='true'><input id='check-box' type="checkbox" name="first" value="first"><textarea class="tasks-text" for="first" id="${i}">${user.description}</textarea><i  id='dotid' class="fa fa-ellipsis-v tasks-icon" aria-hidden="true"></i><i id='removeid' attribute= '${i}'  class="fa fa-trash-o remove" aria-hidden="true"></i></div>`;
      user.index = i;
      localStorage.setItem('Tasks', JSON.stringify(userArray));
    });
    taskList.innerHTML = section;
    editTask();
    interactive();
    clearbutton();
  }
}

function storeData(userArray) {
  const str = JSON.stringify(userArray);
  localStorage.setItem('Tasks', str);
  displayList();
}

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    taskInputBtn.click();
  }
});
taskInputBtn.addEventListener('click', () => {
  const taskInputValue = taskInput.value;
  if (taskInputValue) {
    userArray.push({ description: taskInputValue, completed: false, index: 1 });
    storeData(userArray);
    taskInput.value = '';
  } else {
    alert('Please write some task and then enter'); // eslint-disable-line
  }
});

document.addEventListener('DOMContentLoaded', () => {
  displayList();
});