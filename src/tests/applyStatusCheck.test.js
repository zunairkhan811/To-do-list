/**
 * @jest-environment jsdom
 */

import applyCheck from '../modules/applyStatusCheck.js';

// Mock document and querySelectorAll
const mockQuerySelectorAll = jest.fn();
global.document.querySelectorAll = mockQuerySelectorAll;

describe('applyCheck', () => {
  test('applies styles to checked items and removes styles from unchecked items', () => {
    // Create a sample checkbox element with different checked states
    const checkbox1 = { checked: true, nextElementSibling: { style: {} } };
    const checkbox2 = { checked: false, nextElementSibling: { style: {} } };

    // Mock querySelectorAll to return the sample checkbox elements
    mockQuerySelectorAll.mockReturnValue([checkbox1, checkbox2]);

    // Call the function
    applyCheck();

    // Assert that the styles are applied correctly to the checked item
    expect(checkbox1.nextElementSibling.style.fontStyle).toBe('italic');
    expect(checkbox1.nextElementSibling.style.opacity).toBe(0.4);
    expect(checkbox1.nextElementSibling.style.textDecoration).toBe('line-through');

    // Assert that the styles are removed correctly from the unchecked item
    expect(checkbox2.nextElementSibling.style.fontStyle).toBe('normal');
    expect(checkbox2.nextElementSibling.style.opacity).toBe(1);
    expect(checkbox2.nextElementSibling.style.textDecoration).toBe('none');
  });
});