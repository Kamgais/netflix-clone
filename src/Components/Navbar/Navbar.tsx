import React, { FunctionComponent , useState } from 'react'
import { DATA_DE } from '../../helpers/de';
import { DATA_EN } from '../../helpers/en';
import './Navbar.css'


type Props = {
  signUp:boolean;
}

const Navbar:FunctionComponent<Props> = ({signUp}) =>  {

  const [lang, setLang] = useState('ger');
  return (
    <div className='nav-bar'>
      <h1>Netflix</h1>
      {signUp && <button>{lang === 'ger'? DATA_DE['navbar.button.signup'] : DATA_EN['navbar.button.signup']}</button>}
      {!signUp && <button>{lang === 'ger'? DATA_DE['navbar.button.choose.pay'] : DATA_EN['navbar.button.choose.pay']}</button>}
    </div>
  )
}

export default Navbar;
