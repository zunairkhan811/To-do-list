/**
 * @jest-environment jsdom
 */
import setLocal from '../modules/setLocal.js';

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

describe('setLocal', () => {
  test('sets the local storage with the provided array', () => {
    const todos = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];

    setLocal(todos);
    const storedTodos = JSON.parse(localStorage.getItem('Todos'));
    expect(storedTodos).toEqual(todos);
  });
});