const applyCheck = () => {
  const checkbox = document.querySelectorAll('.task-item input');
  checkbox.forEach((item) => {
    if (item.checked === true) {
      item.nextElementSibling.style.fontStyle = 'italic';
      item.nextElementSibling.style.opacity = 0.4;
      item.nextElementSibling.style.textDecoration = 'line-through';
    } else {
      item.nextElementSibling.style.fontStyle = 'normal';
      item.nextElementSibling.style.opacity = 1;
      item.nextElementSibling.style.textDecoration = 'none';
    }
  });
};

export default applyCheck;