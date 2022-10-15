import React, {createContext,FunctionComponent,useState, useEffect} from 'react'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'

import {auth} from "../firebase-config"

export const userContext = createContext({signUpInFB:(email: string, pwd: string)=>{}, signInInFB:(email: string, pwd: string)=>{}, currentUser :undefined})
export default function UserContextProvider(props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) {
  
    const [currentUser,setCurrentUser] = useState();
    const[loadingData,setLoadingData] = useState(true)

 useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth,(user:any)=>{
    setCurrentUser(user)
    setLoadingData(false)
   })

    return unsubscribe;
 },[])


const signUpInFB = (email:string,pwd:string) => {
 createUserWithEmailAndPassword(auth,email,pwd)
}

const signInInFB = (email:string, pwd:string) => {
signInWithEmailAndPassword(auth, email, pwd)
}


 return (
     <userContext.Provider value={{signUpInFB,signInInFB,currentUser}}>
         {!loadingData && props.children}
     </userContext.Provider>
  )
}
