export default function clearbutton() {
  const clearbtn = document.querySelector('.btn-div');
  clearbtn.addEventListener('click', () => {
    const newArray = JSON.parse(localStorage.getItem('Tasks'));

    const filterArray = newArray.filter((e) => e.completed === false);
    filterArray.forEach((el, i) => {
      el.index = i;
    });
    localStorage.setItem('Tasks', JSON.stringify(filterArray));
        location.reload(); // eslint-disable-line

  });
}