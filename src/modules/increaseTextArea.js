const increaseHeight = () => {
  const textarea = document.querySelectorAll('#textarea');
  textarea.forEach((item) => {
    item.addEventListener('keyup', () => {
      item.style.height = '2px';
      item.style.height = `${item.scrollHeight}px`;
    });
  });
};

export default increaseHeight;