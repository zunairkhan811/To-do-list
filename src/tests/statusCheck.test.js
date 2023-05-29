/**
 * @jest-environment jsdom
 */

import checkstatus from '../modules/statuscheck.js';
import setLocal from '../modules/setLocal.js';
import getLocal from '../modules/getLocal.js';

const mockQuerySelectorAll = jest.fn();
global.document.querySelectorAll = mockQuerySelectorAll;

jest.mock('../modules/setLocal.js');
jest.mock('../modules/getLocal.js');

describe('checkstatus', () => {
  beforeEach(() => {
    setLocal.mockClear();
    getLocal.mockClear();
    setLocal.mockImplementation(() => {});
    getLocal.mockImplementation(() => {});
  });

  test('adds event listener and calls the necessary functions when checkbox is clicked', () => {
    const todos = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];

    const checkbox = { addEventListener: jest.fn() };
    const parentElement = { id: 1 };

    mockQuerySelectorAll.mockReturnValue([checkbox]);
    checkbox.addEventListener.mockImplementation((eventName, callback) => {
      if (eventName === 'click') {
        callback({ target: { parentElement } });
      }
    });

    checkstatus(todos);

    expect(setLocal).toHaveBeenCalledWith([
      { id: 1, title: 'Task 1', completed: true },
      { id: 2, title: 'Task 2', completed: true },
    ]);
    expect(getLocal).toHaveBeenCalled();
  });
});