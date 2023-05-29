/**
 * @jest-environment jsdom
 */

import clearAllCompleted from '../modules/clearAll.js';
import setLocal from '../modules/setLocal.js';
import getLocal from '../modules/getLocal.js';

const mockQuerySelector = jest.fn();
global.document.querySelector = mockQuerySelector;

jest.mock('../modules/setLocal.js');
jest.mock('../modules/getLocal.js');

describe('clearAllCompleted', () => {
  beforeEach(() => {
    setLocal.mockClear();
    getLocal.mockClear();
    setLocal.mockImplementation(() => {});
    getLocal.mockImplementation(() => {});
  });

  test('adds event listener and calls the necessary functions when clear button is clicked', () => {
    const todos = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];

    const mockClearButton = { addEventListener: jest.fn() };
    mockQuerySelector.mockReturnValue(mockClearButton);

    clearAllCompleted(todos);

    mockClearButton.addEventListener.mock.calls[0][1]();

    expect(setLocal).toHaveBeenCalledWith([{ id: 1, title: 'Task 1', completed: false }]);
    expect(getLocal).toHaveBeenCalled();
  });

  test('does not call setLocal and getLocal when no completed todos are found', () => {
    const todos = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: false },
    ];

    const mockClearButton = { addEventListener: jest.fn() };
    mockQuerySelector.mockReturnValue(mockClearButton);

    clearAllCompleted(todos);

    mockClearButton.addEventListener.mock.calls[0][1]();

    expect(setLocal).not.toHaveBeenCalled();
    expect(getLocal).not.toHaveBeenCalled();
  });
});