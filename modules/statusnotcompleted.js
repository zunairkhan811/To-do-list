export default function statusNotCompleted(i) {
  const newArray = JSON.parse(localStorage.getItem('Tasks'));
  newArray[i].completed = false;
  localStorage.setItem('Tasks', JSON.stringify(newArray));
}