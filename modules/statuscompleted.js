export default function statusCompleted(i) {
  const newArray = JSON.parse(localStorage.getItem('Tasks'));
  newArray[i].completed = true;
  localStorage.setItem('Tasks', JSON.stringify(newArray));
}