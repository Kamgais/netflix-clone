import React from 'react'
import NetflixForm from '../../Components/NetflixForm/NetflixForm'
import './SignIn.css';

export default function SignIn() {
  const signUp:boolean = false;
  return (
    <div className='hintergrund'>
     <div className='signin-container'>
      <NetflixForm signUp = {signUp}/>
    </div>
    </div>
    
  )
}
