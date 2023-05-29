/**
 * @jest-environment jsdom
 */
import displayTodo from '../modules/displayTodo.js';
import increaseHeight from '../modules/increaseTextArea.js';
import checkstatus from '../modules/statuscheck.js';
import applyCheck from '../modules/applyStatusCheck.js';
import deleteTodos from '../modules/deleteTodos.js';
import switchIcons from '../modules/switchIcon.js';
import editTodos from '../modules/editTodos.js';
import clearAllCompleted from '../modules/clearAll.js';

jest.mock('../modules/increaseTextArea.js');
jest.mock('../modules/statuscheck.js');
jest.mock('../modules/applyStatusCheck.js');
jest.mock('../modules/deleteTodos.js');
jest.mock('../modules/switchIcon.js');
jest.mock('../modules/editTodos.js');
jest.mock('../modules/clearAll.js');

describe('displayTodo', () => {
  let taskList;

  beforeEach(() => {
    taskList = document.createElement('div');
    taskList.id = 'task-list';
    document.body.appendChild(taskList);
  });

  afterEach(() => {
    taskList.remove();
  });

  test('displays "No Tasks Added Yet" when array is null or empty', () => {
    displayTodo(null);
    expect(taskList.innerHTML).toContain('No Tasks Added Yet');
  });

  test('displays tasks when array is not null or empty', () => {
    const tasks = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];

    displayTodo(tasks);

    expect(taskList.innerHTML).toContain('Task 1');
    expect(taskList.innerHTML).toContain('Task 2');
    expect(taskList.innerHTML).toContain('checked');
    expect(taskList.innerHTML).toContain('!checked');
  });

  test('calls the necessary dependency functions', () => {
    const tasks = [
      { id: 1, title: 'Task 1', completed: false },
    ];

    displayTodo(tasks);

    expect(increaseHeight).toHaveBeenCalled();
    expect(checkstatus).toHaveBeenCalledWith(tasks);
    expect(applyCheck).toHaveBeenCalled();
    expect(deleteTodos).toHaveBeenCalledWith(tasks);
    expect(switchIcons).toHaveBeenCalled();
    expect(editTodos).toHaveBeenCalledWith(tasks);
    expect(clearAllCompleted).toHaveBeenCalledWith(tasks);
  });
});