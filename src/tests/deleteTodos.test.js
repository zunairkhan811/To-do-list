/**
 * @jest-environment jsdom
 */
import deleteTodos from '../modules/deleteTodos.js';
import setLocal from '../modules/setLocal.js';
import getLocal from '../modules/getLocal.js';


// Mock document and querySelectorAll
const mockQuerySelectorAll = jest.fn();
global.document.querySelectorAll = mockQuerySelectorAll;

// Mock setLocal and getLocal
jest.mock('../modules/setLocal.js');
jest.mock('../modules/getLocal.js');

describe('deleteTodos', () => {
  beforeEach(() => {
    // Clear mock calls and mock implementation for setLocal and getLocal before each test
    setLocal.mockClear();
    getLocal.mockClear();
    setLocal.mockImplementation(() => {});
    getLocal.mockImplementation(() => {});
  });

  test('adds event listeners and calls the necessary functions when trash icon is clicked', () => {
    // Create a sample array of todos
    const todos = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];

    // Mock querySelectorAll to return a sample trash icon element
    const mockTrashIcon = { addEventListener: jest.fn(), parentElement: { id: 1 } };
    mockQuerySelectorAll.mockReturnValue([mockTrashIcon]);

    // Call the function
    deleteTodos(todos);

    // Simulate a click event on the trash icon
    mockTrashIcon.addEventListener.mock.calls[0][1]({ target: mockTrashIcon });

    // Assert that the necessary functions are called with the expected arguments
    expect(setLocal).toHaveBeenCalledWith([{ id: 2, title: 'Task 2', completed: true }]);
    expect(getLocal).toHaveBeenCalled();
  });
});