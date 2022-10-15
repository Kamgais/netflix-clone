import React ,{useState , useContext} from 'react'
import {useSelector} from 'react-redux'
import FilmShowCase from '../../Components/ShowCase/FilmShowCase';
import { LanguageContext } from '../../Context/LanguageContext';
import { DATA_DE } from '../../helpers/de';
import { DATA_EN } from '../../helpers/en';
import './ListComponent.css'




export default function ListComponent() {
    const[viewShowCase,setViewShowCase] = useState<any>(false);
    const [movie,setMovie] = useState<any>()
    const {lang} = useContext(LanguageContext)

    const goToShowCase = (movie:any) => {
      setMovie(movie);
      setViewShowCase(true)
    }
    const storeState = useSelector((state:any)=>state.preferencedList)
    const SECURE_URL= 'https://image.tmdb.org/t/p/w780'
  return (
    <>
    
    <div className='list-component-overlay'>
        <h1>{lang === 'en'? DATA_EN['list.component.overlay.h1'] : DATA_DE['list.component.overlay.h1']}</h1>
        <div  className='list-component-container'>
            {storeState.preferencedList.map((movie:any)=>(
            
            <div  key={movie.id} className='list-component-card'>
            <img onClick={()=>goToShowCase(movie)} src={SECURE_URL+movie.backdrop_path}/>
            </div>
           
            ))}
        </div>
    </div>
    {viewShowCase && <FilmShowCase movie={movie} viewShowCase = {setViewShowCase} /> } 
    </>
  )
}
