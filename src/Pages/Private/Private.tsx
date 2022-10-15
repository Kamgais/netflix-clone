import React, {useContext}from 'react'
import { userContext } from '../../Context/UserContext'
import {Outlet,Navigate} from 'react-router-dom'


export default function Private() {

    const {currentUser}  = useContext(userContext);
    
    if(!currentUser){
        return <Navigate to='/'/>
    }
    return (
    <>
      <Outlet/>
    </>
  )
}
