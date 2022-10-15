import React, { FunctionComponent, useState, useEffect , useContext } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { LanguageContext } from '../../Context/LanguageContext'
import { DATA_DE } from '../../helpers/de'
import { DATA_EN } from '../../helpers/en'

import './FilmShowCase.css'

 const FilmShowCase:FunctionComponent<{movie:any , viewShowCase:any}> = ({movie, viewShowCase}) => {
  const SECURE_URL= 'https://image.tmdb.org/t/p/w780'
  const {lang} = useContext(LanguageContext)
  const [button,setButton] = useState<any>('plus')

  useEffect(() => {
   if ((storeState.preferencedList.filter((el:any)=> el.id === movie.id)).length === 0) {
    setButton('plus')
   }
   else {
    setButton('minus')
   }
  }, [])
  const storeState = useSelector<any,any>(state=>state.preferencedList)
  const dispatch = useDispatch()

  const saveMovie = (e:React.MouseEvent<HTMLElement>,movie:any) =>{
   if((storeState.preferencedList.filter((el:any)=> el.id === movie.id)).length === 0) {
    dispatch( {
      type:'PUT',
      payload: movie
  })
    console.log(storeState)

    console.log('hey');
     setButton('minus')

   }


   else {

    dispatch( {
      type:'REMOVE',
      payload: movie
  })

  console.log(storeState.preferencedList.filter((el:any)=> el.id === movie.id))

   setButton('plus')

   }
    
  }
  return (
    <>
    
      <div className='film-show-case-content'>
     <div className='film-show-case-principal-movie'>
      <img src={SECURE_URL+movie.backdrop_path}/>
        <div className="close-component">
        <i className="fa-solid fa-circle-xmark" onClick={() => viewShowCase(false)}></i>
        </div>
        
        <div className="btns">
        <button><i className="fa-solid fa-play"></i>{lang === 'en'? DATA_EN['private.home.movie.information.button.one'] : DATA_DE['private.home.movie.information.button.one']}</button>
          <i className={`fa-solid fa-circle-${button}`} onClick={(e)=>saveMovie(e,movie)}></i>
          <i className="fa-solid fa-thumbs-up"></i>
    </div>
     </div>
    <div className="movie-infos">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>{movie.original_language === 'en'?  'English': 'French'}</p>
    </div>
      </div>
      <div className='film-show-case-overlay' onClick={() => viewShowCase(false)}>
      </div>
      </>
  )
}

export default FilmShowCase
