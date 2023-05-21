import './styles.css';
import { v4 as uuidv4 } from 'uuid';
import setLocal from './modules/setLocal';
import getLocal from './modules/getLocal';
import displayTodo from './modules/displayTodo';
const input = document.querySelector('#add-task-div input');
const entericon = document.querySelector('.add-task-icon i');
const refreshicon = document.querySelector('.list-heading-icon i');
let arr = localStorage.getItem('Todos')? JSON.parse(localStorage.getItem('Todos')): [];

getLocal();

refreshicon.addEventListener('click',()=>{
  refreshicon.style.transform = 'rotate(550deg)'
  window.location.reload();
})

entericon.addEventListener('click',()=>{
  console.log(input.value);
  if(input.value === ''){
    console.log('please write something');
    return;
  }
  else{
    arr.push({id:uuidv4(),completed:true,title:input.value});
    setLocal(arr);
    displayTodo(arr);
    input.value = '';
  }
  
})
document.addEventListener('keypress',(event)=>{
  if(event.key === 'Enter'){
    entericon.click();
  }
})
