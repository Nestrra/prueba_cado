

import React, { useState } from 'react'
import { useAppDispatch } from '../redux/hooks'
import './searchStyles.css'
import { getCharacters } from '../redux/slice/thunks';

export const Search = () => {

    const [input, setinput] = useState<string>('')
    const dispatch = useAppDispatch()



    const hnadleOnChage =(e:any)=>{
       
        setinput( e.target.value )
    }

    const handleSubmit = ()=>{

        dispatch(  getCharacters( `https://rickandmortyapi.com/api/character/?name=${input} `)  )
        
    }



    console.log( input )

  return (
             <div className='search_container' >
                   
                <input onChange={(e)=>hnadleOnChage(e)}  className='input' type="text" placeholder='Buscar...'/>
                <button onClick={handleSubmit} className='btn' >Buscar</button>

            </div>
  )
}
