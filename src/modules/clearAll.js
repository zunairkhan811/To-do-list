import setLocal from './setLocal.js';
import getLocal from './getLocal.js';

const clearAllCompleted = (arr) => {
  const clearbtn = document.querySelector('.btn-div');
  clearbtn.addEventListener('click', () => {
    const newarr = arr.filter((item) => item.completed !== true);
    if (newarr.length !== arr.length && arr !== null) {
      setLocal(newarr);
      getLocal();
      arr = [];
    }
  });
};

export default clearAllCompleted;