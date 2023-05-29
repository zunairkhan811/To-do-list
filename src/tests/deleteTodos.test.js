/**
 * @jest-environment jsdom
 */
import deleteTodos from '../modules/deleteTodos.js';
import setLocal from '../modules/setLocal.js';
import getLocal from '../modules/getLocal.js';

const mockQuerySelectorAll = jest.fn();
global.document.querySelectorAll = mockQuerySelectorAll;

jest.mock('../modules/setLocal.js');
jest.mock('../modules/getLocal.js');

describe('deleteTodos', () => {
  beforeEach(() => {
    setLocal.mockClear();
    getLocal.mockClear();
    setLocal.mockImplementation(() => {});
    getLocal.mockImplementation(() => {});
  });

  test('adds event listeners and calls the necessary functions when trash icon is clicked', () => {
    const todos = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];

    const mockTrashIcon = { addEventListener: jest.fn(), parentElement: { id: 1 } };
    mockQuerySelectorAll.mockReturnValue([mockTrashIcon]);

    deleteTodos(todos);

    mockTrashIcon.addEventListener.mock.calls[0][1]({ target: mockTrashIcon });

    expect(setLocal).toHaveBeenCalledWith([{ id: 2, title: 'Task 2', completed: true }]);
    expect(getLocal).toHaveBeenCalled();
  });
});