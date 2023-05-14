import './styles.css';
import { v4 as uuidv4 } from 'uuid';
import setLocal from './modules/setLocal';
import getLocal from './modules/getLocal';
const input = document.querySelector('#add-task-div input');
const entericon = document.querySelector('.add-task-icon i');
let arr = [];

getLocal();

entericon.addEventListener('click',()=>{
  console.log(input.value)
  arr.push({id:uuidv4(),completed:true,title:input.value})
  input.value = '';
  setLocal(arr);
})
document.addEventListener('keypress',(event)=>{
  if(event.key === 'Enter'){
    entericon.click();
  }
})
