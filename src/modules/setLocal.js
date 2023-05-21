const setLocal = (arr)=>{
        localStorage.setItem('Todos',JSON.stringify(arr)); 
}

export default setLocal;