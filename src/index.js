import './styles.css';

const taskInputBtn = document.querySelector('#taskInputbtn');
const taskList = document.querySelector('#task-list');
const taskInput = document.querySelector('#add-task');
let userArray = [];
const objStr = localStorage.getItem('Tasks');
if (objStr != null) {
  userArray = JSON.parse(objStr);
}

function removetask(removeiconId) {
  removeiconId.forEach((el, i) => {
    el.addEventListener('click', () => {
      const newArray = JSON.parse(localStorage.getItem('Tasks'));
      newArray.splice(i, 1);
      localStorage.setItem('Tasks', JSON.stringify(newArray));
      location.reload(); // eslint-disable-line
    });
  });
}
function savelocal(text, i) {
  const newArray = JSON.parse(localStorage.getItem('Tasks'));
  newArray[i].description = text;
  localStorage.setItem('Tasks', JSON.stringify(newArray));
}

function editTask() {
  const removeiconId = document.querySelectorAll('#remove');
  const doticon = document.querySelectorAll('#tasks-icon');
  const textareaInput = document.querySelectorAll('.tasks-text');
  const taskdiv = document.querySelectorAll('.tasks');

  taskdiv.forEach((el, i) => {
    el.addEventListener('dblclick', (e) => {
      e.target.disabled = false;
      doticon[i].style.display = 'none';
      removeiconId[i].style.display = 'block';
      removetask(removeiconId);
      el.addEventListener('dblclick', (e) => {
        e.target.disabled = true;
        doticon[i].style.display = 'block';
        removeiconId[i].style.display = 'none';
        editTask();
        savelocal(textareaInput[i].value, i);
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
          <div class="tasks"><input type="checkbox" name="first" value="first"><textarea disabled class="tasks-text" for="first" id="${i}">${user.description}</textarea><span><i id="tasks-icon" class="fa fa-ellipsis-v" aria-hidden="true"></i><i id='remove' class="fa fa-trash-o" aria-hidden="true"></i></span></div>`;
      user.index = i;
      localStorage.setItem('Tasks', JSON.stringify(userArray));
    });
    taskList.innerHTML = section;
    editTask();
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
  if (taskInputValue.trim() !== 0) {
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