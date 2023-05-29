/**
 * @jest-environment jsdom
 */

import applyCheck from '../modules/applyStatusCheck.js';

const mockQuerySelectorAll = jest.fn();
global.document.querySelectorAll = mockQuerySelectorAll;

describe('applyCheck', () => {
  test('applies styles to checked items and removes styles from unchecked items', () => {
    const checkbox1 = { checked: true, nextElementSibling: { style: {} } };
    const checkbox2 = { checked: false, nextElementSibling: { style: {} } };
    mockQuerySelectorAll.mockReturnValue([checkbox1, checkbox2]);

    applyCheck();
    expect(checkbox1.nextElementSibling.style.fontStyle).toBe('italic');
    expect(checkbox1.nextElementSibling.style.opacity).toBe(0.4);
    expect(checkbox1.nextElementSibling.style.textDecoration).toBe('line-through');

    expect(checkbox2.nextElementSibling.style.fontStyle).toBe('normal');
    expect(checkbox2.nextElementSibling.style.opacity).toBe(1);
    expect(checkbox2.nextElementSibling.style.textDecoration).toBe('none');
  });
});