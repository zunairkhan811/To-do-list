/**
 * @jest-environment jsdom
 */
import editTodos from '../modules/editTodos.js';
import setLocal from '../modules/setLocal.js';
import getLocal from '../modules/getLocal.js';

const mockQuerySelectorAll = jest.fn();
global.document.querySelectorAll = mockQuerySelectorAll;

jest.mock('../modules/setLocal.js');
jest.mock('../modules/getLocal.js');

describe('editTodos', () => {
  beforeEach(() => {
    setLocal.mockClear();
    getLocal.mockClear();
    setLocal.mockImplementation(() => {});
    getLocal.mockImplementation(() => {});
  });

  test('adds event listeners and calls the necessary functions when textarea is double-clicked', () => {
    const todos = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ];

    const mockTextarea = { addEventListener: jest.fn() };
    mockQuerySelectorAll.mockReturnValue([mockTextarea]);
    editTodos(todos);

    mockTextarea.addEventListener.mock.calls[0][1]({
      target: { value: 'Edited Task', parentElement: { id: 1 } },
    });

    expect(setLocal).toHaveBeenCalledWith(todos);
    expect(getLocal).toHaveBeenCalled();
  });
});