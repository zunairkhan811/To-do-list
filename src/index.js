import './styles.css';

const taskList = document.querySelector('#task-list');

const arr = [{
  description: 'wash the dishes',
  completed: 'false',
  index: '0',
}, {
  description: 'complete to do list project',
  completed: 'false',
  index: '1',
}];

arr.forEach((items) => {
  taskList.innerHTML += `
    <div class="tasks"><input type="checkbox" name="first" value="first" id="first"><label class="tasks-text" for="first">${items.description}</label><span class="tasks-icon"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span></div>`;
});
