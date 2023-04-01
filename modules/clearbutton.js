function clearbutton(){
    const clearbtn = document.querySelector('.btn-div');
    clearbtn.addEventListener('click',()=>{
        const newArray = JSON.parse(localStorage.getItem('Tasks'));
    
        let filterArray = newArray.filter(function(e){
            return e.completed ===false
        })
        filterArray.forEach((el,i)=>{
            el.index = i
        })
        localStorage.setItem('Tasks', JSON.stringify(filterArray));
        location.reload(); // eslint-disable-line
     
    })
}