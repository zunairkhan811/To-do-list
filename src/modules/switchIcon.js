const switchIcons = () => {
  const textarea = document.querySelectorAll('#textarea');
  const mainbox = document.querySelector('#main-box');
  let previousTextarea = null;

  textarea.forEach((item) => {
    item.addEventListener('click', () => {
      if (previousTextarea !== null) {
        const previousIcon = previousTextarea.nextElementSibling;
        const previousIconnext = previousTextarea.nextElementSibling.nextElementSibling;
        previousIcon.style.display = 'block';
        previousIconnext.style.display = 'none';
      }

      const currentIcon = item.nextElementSibling;
      const currentIconnext = item.nextElementSibling.nextElementSibling;
      currentIcon.style.display = 'none';
      currentIconnext.style.display = 'block';

      previousTextarea = item;
    });

    mainbox.addEventListener('click', (event) => {
      event.stopPropagation();
      document.addEventListener('click', () => {
        const previousIcon = item.nextElementSibling;
        const previousIconnext = item.nextElementSibling.nextElementSibling;
        previousIcon.style.display = 'block';
        previousIconnext.style.display = 'none';
      });
    });
  });
};

export default switchIcons;