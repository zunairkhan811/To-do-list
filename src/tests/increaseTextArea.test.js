/**
 * @jest-environment jsdom
 */

import increaseHeight from '../modules/increaseTextArea.js';

const mockQuerySelectorAll = jest.fn();
global.document.querySelectorAll = mockQuerySelectorAll;

describe('increaseHeight', () => {
  test('increases the height of textarea based on content', () => {
    
    const textarea = {
      addEventListener: jest.fn(),
      style: { height: '' },
      scrollHeight: 2,
    };

    mockQuerySelectorAll.mockReturnValue([textarea]);

    increaseHeight();

    textarea.addEventListener.mock.calls[0][1]();

    expect(textarea.style.height).toBe('2px');
  });
});