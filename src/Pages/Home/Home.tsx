import React, { FunctionComponent,useState , useContext} from 'react'
import { LanguageContext } from '../../Context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { DATA_DE } from '../../helpers/de';
import { DATA_EN } from '../../helpers/en';
import './Home.css'

 


const Home:FunctionComponent = () => {
    const {lang, changeLang} = useContext(LanguageContext)
    const navigate = useNavigate();
    

    const handleChange = (el: React.ChangeEvent<HTMLSelectElement>)=>{
     const value = el.target.value;
     console.log(value);
     if(value === 'ger') {
        changeLang('ger');
     }
     else if(value === 'en'){
        changeLang('en')
     }
    }

  return (
    <div className='container'>
      <nav>
        <h1>Netflix</h1>
        <div className='btns-start'>
        <select onChange={(el)=>handleChange(el)}>
        <option value="ger">Deutsch</option>
        <option value="en">Englisch</option>
        </select>
        <button onClick={()=>navigate('/signin')}>{lang === 'en'? DATA_EN['home.first.login.button'] : DATA_DE['home.first.login.button']}</button>
        </div>
      </nav>
      <div className='container-content'>
        <h1>{lang === 'en'? DATA_EN['home.container.content.title'] : DATA_DE['home.container.content.title']}</h1>
        <p>{lang === 'en'? DATA_EN['home.container.content.first'] : DATA_DE['home.container.content.first']}</p>
        <p>{lang === 'en'? DATA_EN['home.container.content.second'] : DATA_DE['home.container.content.second']}</p>
        <div className='input'> 
        <input type="email" placeholder={lang === 'en'? DATA_EN['home.container.content.placeholder'] : DATA_DE['home.container.content.placeholder']}/>
        <button onClick={()=>navigate('/signup')}>{lang === 'en'? DATA_EN['home.container.content.button'] : DATA_DE['home.container.content.button']}</button>
        </div>
       
        
      </div>
    </div>
  )
}


export default Home;
