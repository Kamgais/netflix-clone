import { preferencedList } from "../reducers/listReducer";
import { configureStore } from '@reduxjs/toolkit'

 export  const store = configureStore(
     {
        
       reducer : {preferencedList}
        
    }
)






