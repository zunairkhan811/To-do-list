import setLocal from './setLocal.js';

const clearAllCompleted = (arr) => {
  const clearbtn = document.querySelector('.btn-div');
  clearbtn.addEventListener('click', () => {
    const newarr = arr.filter((item) => item.completed !== true);
    if (newarr.length !== arr.length && arr !== null) {
      setLocal(newarr);
      window.location.reload();
    }
  });
};

export default clearAllCompleted;