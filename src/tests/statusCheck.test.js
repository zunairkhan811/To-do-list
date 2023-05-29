/**
 * @jest-environment jsdom
 */

import checkstatus from '../modules/statuscheck.js';
import setLocal from '../modules/setLocal.js';
import getLocal from '../modules/getLocal.js';


// Mock document and querySelectorAll
const mockQuerySelectorAll = jest.fn();
global.document.querySelectorAll = mockQuerySelectorAll;

// Mock setLocal and getLocal
jest.mock('../modules/setLocal.js');
jest.mock('../modules/getLocal.js');

describe('checkstatus', () => {
  beforeEach(() => {
    // Clear mock calls and mock implementation for setLocal and getLocal before each test
    setLocal.mockClear();
    getLocal.mockClear();
    setLocal.mockImplementation(() => {});
    getLocal.mockImplementation(() => {});
  });

  test('adds event listener and calls the necessary functions when checkbox is clicked', () => {
    // Create a sample array of todos
    const todos = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];

    // Create a sample checkbox element
    const checkbox = { addEventListener: jest.fn() };
    const parentElement = { id: 1 };

    // Mock querySelectorAll to return the sample checkbox element
    mockQuerySelectorAll.mockReturnValue([checkbox]);
    checkbox.addEventListener.mockImplementation((eventName, callback) => {
      if (eventName === 'click') {
        callback({ target: { parentElement } });
      }
    });

    // Call the function
    checkstatus(todos);

    // Assert that fiterArray, setLocal, and getLocal are called with the expected arguments
    expect(setLocal).toHaveBeenCalledWith([
      { id: 1, title: 'Task 1', completed: true },
      { id: 2, title: 'Task 2', completed: true },
    ]);
    expect(getLocal).toHaveBeenCalled();
  });
});