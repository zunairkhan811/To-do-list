/**
 * @jest-environment jsdom
 */
import getLocal from '../modules/getLocal.js';
import displayTodo from '../modules/displayTodo.js';

const localStorageMock = (() => {
  let store = {};

  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: (key) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

jest.mock('../modules/displayTodo.js', () => jest.fn());

describe('getLocal', () => {
  beforeEach(() => {
    displayTodo.mockClear();
  });

  test('retrieves the local storage and calls displayTodo with the parsed array', () => {
  
    const todos = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];

    localStorage.setItem('Todos', JSON.stringify(todos));

    getLocal();

    expect(displayTodo).toHaveBeenCalledWith(todos);
  });

  test('calls displayTodo with null when local storage does not contain Todos', () => {
   
    localStorage.removeItem('Todos');

    getLocal();

    expect(displayTodo).toHaveBeenCalledWith(null);
  });
});