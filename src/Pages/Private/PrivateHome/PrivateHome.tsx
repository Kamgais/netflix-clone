import React,{useState, useEffect, useContext} from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../../firebase-config'
import { useNavigate } from 'react-router-dom'
import ResourceService from '../../../Services/ResourceService'
import './PrivateHome.css'
import cover from './cover.jpg'
import FilmShowCase from '../../../Components/ShowCase/FilmShowCase'
import { LanguageContext } from '../../../Context/LanguageContext'
import { DATA_EN } from '../../../helpers/en'
import { DATA_DE } from '../../../helpers/de'



export default function PrivateHome() {
    const SECURE_URL= 'https://image.tmdb.org/t/p/w780'
   const  divStyle = {
    backgroundImage : 'url('+cover+')'
   }
   
   const{lang} = useContext(LanguageContext)
   const[movies, setMovies] = useState<any>();
   const [dramas,setDramas] = useState<any>()
   const[bestDramas,setBestDramas] = useState<any>()
   const[kids,setKids] = useState<any>()
   const[kinos, setKinos] = useState<any>()
   const[movie,setMovie] = useState()
   const[viewShowCase,setViewShowCase] = useState(false)
   const navigate = useNavigate()
 useEffect(()=>{
    ResourceService.getPopularMovies()
    .then(data=> {
        setMovies(data)
        console.log(data)
       
      }
        
        )
        
 },[])

 useEffect(()=>{
  ResourceService.getDramaMovies(2019)
  .then(data=> {
      setDramas(data)
      console.log(data)
     
    }
      
      )
      
},[])


useEffect(()=>{
  ResourceService.getKidsMovies()
  .then(data=> {
      setKids(data)
      console.log(data)
     
    }
      
      )


      
},[])


useEffect(()=>{
  ResourceService.getTheatresMovies()
  .then(data=> {
      setKinos(data)
      console.log(data)
     
    }
      
      )


      
},[])


useEffect(()=>{
  ResourceService.getDramaMovies(2020)
  .then(data=> {
      setBestDramas(data)
      console.log(data)
     
    }
      
      )


      
},[])


const logOut = () => {
  signOut(auth)
 
}

const handleClick= (e:React.MouseEvent<HTMLButtonElement>, index:number)=>{
  const slider:HTMLElement| null = document.getElementById(`${index}`)
  console.log(slider)
  const sliderIndex:number = parseInt(getComputedStyle(slider as HTMLDivElement).getPropertyValue('--slider-index'))
  if((e.target as HTMLButtonElement).classList.contains('left')){
    if(sliderIndex - 1 > -1){
      slider?.style.setProperty('--slider-index', String(sliderIndex - 1))
    }
    else {
      slider?.style.setProperty('--slider-index', String(3))
    }
  }

  if((e.target as HTMLButtonElement).classList.contains('right')){
    if(sliderIndex + 1 < 4) {
    slider?.style.setProperty('--slider-index', String(sliderIndex + 1))
    }

    else{
      slider?.style.setProperty('--slider-index', String(0))
    }
    
  }
  
}


const goToShowCase = (movie:any) => {
  setMovie(movie);
  setViewShowCase(!viewShowCase)

}

 //const background = SECURE_URL+movies[2].backdrop_path;
    
  return (
   <>
   <div  style={divStyle} className='principal-movie'>
    <nav className='private-home-nav'>
    <h1 className='private-home-h1'>{lang === 'en'? DATA_EN['private.home.h1'] : DATA_DE['private.home.h1']}</h1>
    <ul className='private-home-ul'>
      <li className='private-home-li' onClick={()=>navigate('/private/private-home')}>{lang === 'en'? DATA_EN['private.home.li.one'] : DATA_DE['private.home.li.one']}</li>
      <li className='private-home-li'>{lang === 'en'? DATA_EN['private.home.li.second'] : DATA_DE['private.home.li.second']}</li>
      <li className='private-home-li'>{lang === 'en'? DATA_EN['private.home.li.third'] : DATA_DE['private.home.li.third']}</li>
      <li className='private-home-li'>{lang === 'en'? DATA_EN['private.home.li.four'] : DATA_DE['private.home.li.four']}</li>
      <li className='private-home-li' onClick={()=>navigate('/private/list')}>{lang === 'en'? DATA_EN['private.home.li.five'] : DATA_DE['private.home.li.five']}</li>
    </ul>
    <div className='private-home-icons'>
    <i className="fa-solid fa-magnifying-glass"></i>
    <i className="fa-solid fa-clock-five"></i>
    <i className="fa-solid fa-circle-user" onClick={logOut}></i>
    </div>
    
    </nav>
    <div className='movie-information'>
      <p><span>N</span>Serie</p>
      <h1>{lang === 'en'? DATA_EN['private.home.movie.information.h1'] : DATA_DE['private.home.movie.information.h1']}</h1>
      <p>{lang === 'en'? DATA_EN['private.home.movie.information.p'] : DATA_DE['private.home.movie.information.p']}</p>
      <button><i className="fa-solid fa-play"></i>{lang === 'en'? DATA_EN['private.home.movie.information.button.one'] : DATA_DE['private.home.movie.information.button.one']}</button>
      <button><i className="fa-solid fa-circle-info"></i>{lang === 'en'? DATA_EN['private.home.movie.information.button.second'] : DATA_DE['private.home.movie.information.button.second']}</button>
    </div>
   </div>
     <div className='private-home-box'>
      <h2>{lang === 'en'? DATA_EN['private.home.private.home.box.h2.one'] : DATA_DE['private.home.private.home.box.h2.one']}</h2>
     </div>
    <div className='private-home-best-movies'>
    
      <button onClick={(e)=>handleClick(e,1)} className='handle left'>&#8249;</button>
    <div className='private-home-img-box 1' id='1'>
    {movies?.results.map((movie:any)=>(
    <>
    
    <img onClick={()=>goToShowCase(movie)} src={SECURE_URL+movie.backdrop_path}/>
    
    
    </>
   ))}
     </div>
   <button  onClick={(e)=>handleClick(e,1)}
   className='handle right'>&#8250;</button>
    </div>

    <div className='private-home-box'>
      <h2>{lang === 'en'? DATA_EN['private.home.private.home.box.h2.second'] : DATA_DE['private.home.private.home.box.h2.second']}</h2>
     </div>
    <div className='private-home-best-movies'>
    
      <button onClick={(e)=>handleClick(e,2)} className='handle left'>&#8249;</button>
    <div className='private-home-img-box 2' id='2'>
    {dramas?.results.map((movie:any)=>(
    <>
    
    <img onClick={()=>goToShowCase(movie)} src={SECURE_URL+movie.backdrop_path}/>
    
    
    </>
   ))}
     </div>
   <button  onClick={(e)=>handleClick(e,2)}
   className='handle right'>&#8250;</button>
    </div>

    <div className='private-home-box'>
      <h2>{lang === 'en'? DATA_EN['private.home.private.home.box.h2.third'] : DATA_DE['private.home.private.home.box.h2.third']}</h2>
     </div>
    <div className='private-home-best-movies'>
    
      <button onClick={(e)=>handleClick(e,3)} className='handle left'>&#8249;</button>
    <div className='private-home-img-box 3' id='3'>
    {kids?.results.map((movie:any)=>(
    <>
    
    <img onClick={()=>goToShowCase(movie)} src={SECURE_URL+movie.backdrop_path}/>
    
    
    </>
   ))}
     </div>
   <button  onClick={(e)=>handleClick(e,3)}
   className='handle right'>&#8250;</button>
    </div>
   

    <div className='private-home-box'>
      <h2>{lang === 'en'? DATA_EN['private.home.private.home.box.h2.four'] : DATA_DE['private.home.private.home.box.h2.four']}</h2>
     </div>
    <div className='private-home-best-movies'>
    
      <button onClick={(e)=>handleClick(e,4)} className='handle left'>&#8249;</button>
    <div className='private-home-img-box 4' id='4'>
    {kinos?.results.map((movie:any)=>(
    <>
    
    <img  onClick={()=>goToShowCase(movie)} src={SECURE_URL+movie.backdrop_path}/>
    
    
    </>
   ))}
     </div>
   <button  onClick={(e)=>handleClick(e,4)}
   className='handle right'>&#8250;</button>
    </div>

    <div className='private-home-box'>
      <h2>{lang === 'en'? DATA_EN['private.home.private.home.box.h2.five'] : DATA_DE['private.home.private.home.box.h2.five']}</h2>
     </div>
    <div className='private-home-best-movies'>
    
      <button onClick={(e)=>handleClick(e,5)} className='handle left'>&#8249;</button>
    <div className='private-home-img-box 5' id='5'>
    {bestDramas?.results.map((movie:any)=>(
    <>
    
    <img onClick={()=>goToShowCase(movie)} src={SECURE_URL+movie.backdrop_path}/>
    
    
    </>
   ))}
     </div>
   <button  onClick={(e)=>handleClick(e,5)}
   className='handle right'>&#8250;</button>
    </div>

   {viewShowCase && <FilmShowCase movie={movie} viewShowCase = {setViewShowCase} /> } 
   </>
  )
}
