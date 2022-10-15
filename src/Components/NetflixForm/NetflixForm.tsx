import React, { FunctionComponent, useState,useRef , useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DATA_DE } from '../../helpers/de'
import { DATA_EN } from '../../helpers/en'
import { userContext } from '../../Context/UserContext'
import './NetflixForm.css'
import { LanguageContext } from '../../Context/LanguageContext'


type Props = {
  signUp : boolean
}

const NetflixForm:FunctionComponent<Props> = ({signUp}) => {
  const {lang} = useContext(LanguageContext)
  const [validation,setValidation] = useState('')
 const {signUpInFB,signInInFB} = useContext(userContext)
  const inputEmail:any = useRef()
  const inputPwd:any = useRef()
  const formRef:any = useRef()
  const navigate = useNavigate()
 

  const handleSubmit = async(el:any) => {
    //console.log(inputs[0].current.value)
   el.preventDefault();
   if(signUp){
    try{
      const cred = await  signUpInFB(
        inputEmail.current.value, 
        inputPwd.current.value)
        await signInInFB(inputEmail.current.value, 
          inputPwd.current.value)
        formRef.current.reset()
        navigate('/private/private-home')
        }
     catch(err:any){
       if(err.code === 'auth/invalid-email') {
        setValidation('Email format invalid')
       }

       if(err.code === 'auth/email-already-in-use'){
        setValidation('Email already used. Please Log in')
       }
     }
   }

   if(!signUp){
    try{
     const cred = await signInInFB(inputEmail.current.value, 
      inputPwd.current.value)
      navigate('/private/private-home')
}
    catch(err:any) {
     console.log(err.code)
     setValidation('email or password incorrect')
    }
   }
  
  }
  
  return (
    <form ref={formRef} className='netflix-form' onSubmit={(el) =>handleSubmit(el)}>
     {signUp && <h1>{lang === 'ger'? DATA_DE['signup.container.title'] : DATA_EN['signup.container.title']}</h1>}
     {!signUp && <h1>{lang === 'ger'? DATA_DE['signin.container.title'] : DATA_EN['signin.container.title']}</h1>}
     {signUp &&  <p>{lang === 'ger'? DATA_DE['signup.container.untertitle.first'] : DATA_EN['signup.container.untertitle.first']}</p> }
     {signUp && <p>{lang === 'ger'? DATA_DE['signup.container.untertitle.second'] : DATA_EN['signup.container.untertitle.second']}</p>}
     <input type="email" 
     ref={inputEmail}
     />
     <input type="password" 
     ref={inputPwd}
     />

     {validation && <p style={{color:'red'}}>Bonjour</p>}

     {signUp && <div className='my-checkbox'><input type="checkbox" id='check' /> <label htmlFor="check">{lang === 'ger'? DATA_DE['signup.container.checkbox'] : DATA_EN['signup.container.checkbox']}</label></div>}
     {signUp && <button>{lang === 'ger'? DATA_DE['signup.container.container.button'] : DATA_EN['signup.container.container.button']}</button>}
     {!signUp && <button>{lang === 'ger'? DATA_DE['signin.container.container.button'] : DATA_EN['signin.container.container.button']}</button>}
     {!signUp && (
      <div className='my-checkbox'>
     <input type="checkbox" />
     <label>{lang === 'ger'? DATA_DE['signin.container.checkbox'] : DATA_EN['signin.container.checkbox']}
     </label>
     </div>
     )
     }
    
    </form>
  )
}

export default NetflixForm;
