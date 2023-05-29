/**
 * @jest-environment jsdom
 */

import increaseHeight from '../modules/increaseTextArea.js';

// Mock document and querySelectorAll
const mockQuerySelectorAll = jest.fn();
global.document.querySelectorAll = mockQuerySelectorAll;

describe('increaseHeight', () => {
  test('increases the height of textarea based on content', () => {
    // Create a sample textarea element
    const textarea = {
      addEventListener: jest.fn(),
      style: { height: '' },
      scrollHeight: 2,
    };

    // Mock querySelectorAll to return the sample textarea element
    mockQuerySelectorAll.mockReturnValue([textarea]);

    // Call the function
    increaseHeight();

    // Simulate a keyup event on the textarea
    textarea.addEventListener.mock.calls[0][1]();

    // Assert that the height of the textarea is increased based on scrollHeight
    expect(textarea.style.height).toBe('2px');
  });
});