import { Reducer } from "react"
import { AnyAction } from "redux";

 export const initialState = {
  preferencedList:[]
}



 export const preferencedList:Reducer<{ preferencedList: any[]; } | undefined, AnyAction> = (state=initialState,action:any) =>{
   
    switch(action.type){
        case 'PUT' : 
         
        
            return {
                ...state,
                preferencedList : [...state.preferencedList,action.payload]
            }
        


        case  'REMOVE' : 
        
        return{
            ...state,
            preferencedList: state.preferencedList.filter((element:any) => element.id !== action.payload.id)
        }

        default : 
        return state
    }
}