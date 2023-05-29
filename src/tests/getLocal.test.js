/**
 * @jest-environment jsdom
 */
import getLocal from '../modules/getLocal.js';
import displayTodo from '../modules/displayTodo.js';

// Mock localStorage
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

// Mock the displayTodo function
jest.mock('../modules/displayTodo.js', () => jest.fn());

describe('getLocal', () => {
  beforeEach(() => {
    // Clear the mock calls for displayTodo before each test
    displayTodo.mockClear();
  });

  test('retrieves the local storage and calls displayTodo with the parsed array', () => {
    // Create a sample array of todos
    const todos = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];

    // Set the sample array in localStorage
    localStorage.setItem('Todos', JSON.stringify(todos));

    // Call the function
    getLocal();

    // Assert that displayTodo is called with the parsed array from localStorage
    expect(displayTodo).toHaveBeenCalledWith(todos);
  });

  test('calls displayTodo with null when local storage does not contain Todos', () => {
    // Clear any existing value in localStorage
    localStorage.removeItem('Todos');

    // Call the function
    getLocal();

    // Assert that displayTodo is called with null
    expect(displayTodo).toHaveBeenCalledWith(null);
  });
});