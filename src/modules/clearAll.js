import setLocal from "./setLocal";
const clearAllCompleted = (arr)=>{
    // const arr = JSON.parse(localStorage.getItem('Todos'))
    const clearbtn = document.querySelector('.btn-div')
    let newarr = arr.filter((item)=>!item.completed);
    clearbtn.addEventListener('click',()=>{
        if(newarr.length === arr.length){
            return;
        }else{
            setLocal(newarr);
            window.location.reload();
        }
        
    })
}

export default clearAllCompleted;