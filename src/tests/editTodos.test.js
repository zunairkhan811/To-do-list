/**
 * @jest-environment jsdom
 */
import editTodos from '../modules/editTodos.js';
import setLocal from '../modules/setLocal.js';
import getLocal from '../modules/getLocal.js';

// Mock document and querySelectorAll
const mockQuerySelectorAll = jest.fn();
global.document.querySelectorAll = mockQuerySelectorAll;

// Mock setLocal and getLocal
jest.mock('../modules/setLocal.js');
jest.mock('../modules/getLocal.js');

describe('editTodos', () => {
  beforeEach(() => {
    // Clear mock calls and mock implementation for setLocal and getLocal before each test
    setLocal.mockClear();
    getLocal.mockClear();
    setLocal.mockImplementation(() => {});
    getLocal.mockImplementation(() => {});
  });

  test('adds event listeners and calls the necessary functions when textarea is double-clicked', () => {
    // Create a sample array of todos
    const todos = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];

    // Mock querySelectorAll to return a sample textarea element
    const mockTextarea = { addEventListener: jest.fn() };
    mockQuerySelectorAll.mockReturnValue([mockTextarea]);

    // Call the function
    editTodos(todos);

    // Simulate a double-click event on the textarea
    mockTextarea.addEventListener.mock.calls[0][1]({
      target: { value: 'Edited Task', parentElement: { id: 1 } },
    });

    // Assert that the necessary functions are called with the expected arguments
    expect(setLocal).toHaveBeenCalledWith(todos);
    expect(getLocal).toHaveBeenCalled();
  });
});