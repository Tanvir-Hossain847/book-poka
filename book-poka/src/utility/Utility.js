const getStoredData = () =>{
    const storedData = localStorage.getItem('readlist')

    if(storedData){
        const storedBookData = JSON.parse(storedData)
        return storedBookData;
    }
    else{
        return [];
    }
}

export const setStoredData = (id) =>{
    const storedBookData = getStoredData();

    if(storedBookData.includes(id)){
        alert('Already Read')
    }
    else{
        storedBookData.push(id)
        const newBookData = JSON.stringify(storedBookData)
        localStorage.setItem('readlist', newBookData)
    }
}