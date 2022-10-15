
 export const putInPreferencedList = (item:any) =>{

    return {
        type:'PUT',
        payload: item
    }
}


 export const removeInPreferencedList = (item:any) =>{

    return {
        type:'REMOVE',
        payload: item
    }
}