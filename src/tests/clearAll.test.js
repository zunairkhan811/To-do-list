/**
 * @jest-environment jsdom
 */

import clearAllCompleted from '../modules/clearAll.js';
import setLocal from '../modules/setLocal.js';
import getLocal from '../modules/getLocal.js';

// Mock document and querySelector
const mockQuerySelector = jest.fn();
global.document.querySelector = mockQuerySelector;

// Mock setLocal and getLocal
jest.mock('../modules/setLocal.js');
jest.mock('../modules/getLocal.js');

describe('clearAllCompleted', () => {
  beforeEach(() => {
    // Clear mock calls and mock implementation for setLocal and getLocal before each test
    setLocal.mockClear();
    getLocal.mockClear();
    setLocal.mockImplementation(() => {});
    getLocal.mockImplementation(() => {});
  });

  test('adds event listener and calls the necessary functions when clear button is clicked', () => {
    // Create a sample array of todos
    const todos = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];

    // Mock querySelector to return a sample clear button element
    const mockClearButton = { addEventListener: jest.fn() };
    mockQuerySelector.mockReturnValue(mockClearButton);

    // Call the function
    clearAllCompleted(todos);

    // Simulate a click event on the clear button
    mockClearButton.addEventListener.mock.calls[0][1]();

    // Assert that the necessary functions are called with the expected arguments
    expect(setLocal).toHaveBeenCalledWith([{ id: 1, title: 'Task 1', completed: false }]);
    expect(getLocal).toHaveBeenCalled();
  });

  test('does not call setLocal and getLocal when no completed todos are found', () => {
    // Create a sample array of todos without completed todos
    const todos = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: false },
    ];

    // Mock querySelector to return a sample clear button element
    const mockClearButton = { addEventListener: jest.fn() };
    mockQuerySelector.mockReturnValue(mockClearButton);

    // Call the function
    clearAllCompleted(todos);

    // Simulate a click event on the clear button
    mockClearButton.addEventListener.mock.calls[0][1]();

    // Assert that setLocal and getLocal are not called
    expect(setLocal).not.toHaveBeenCalled();
    expect(getLocal).not.toHaveBeenCalled();
  });
});