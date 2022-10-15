import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import NetflixForm from '../../Components/NetflixForm/NetflixForm'
import './SignUp.css'

export default function SignUp() {
  const signUp:boolean = true;
  return (
    <div className='signup-container'>
    <Navbar signUp = {signUp} />
    <div className='signup-content'>
      <NetflixForm signUp={signUp} />
    </div>
    </div>
  )
}
