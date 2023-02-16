import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import './pagination.css'
import { getCharacters } from '../redux/slice/thunks';


export const Pagination = () => {

    const {url, isLoading, characters, next, previus, paginas } = useAppSelector((state) => state.characterReducer)
    const dispatch = useAppDispatch()
    const [pagina, setpagina] = useState<number>(1)


        const prev =()=>{
            setpagina(pagina - 1)
            dispatch(getCharacters(previus))

        }

        const siguiente =()=>{
            setpagina(pagina + 1)
            dispatch(getCharacters(next))

        }


  return (

   
   <div className='pagination_content' >

        <button onClick={ prev  } disabled={ previus === null ?  true :false } className='btnPag' >Anterior</button>
         <p> Pagina {pagina  } de { paginas }  </p>   
        <button  onClick={ siguiente  } disabled={ next === null ?  true :false }  className='btnPag'>Siguiente</button>

    </div>
  )
}
