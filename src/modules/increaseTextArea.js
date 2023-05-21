const increaseHeight =()=>{
    const textarea = document.querySelectorAll('#title');
    textarea.forEach((item)=>{
        item.addEventListener('keyup', ()=>{
            item.style.height = '5px';
            item.style.height = (item.scrollHeight)+ 'px'
        })
    })
}

export default increaseHeight;