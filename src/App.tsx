

import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'


function App() {

  const [data, setdata] = useState<any>()
  const [input, setinput] = useState<any>()
  const [paginas, setPaginas] = useState<any>()
  const [pagina, setPagina] = useState<any>(1)

//https://rickandmortyapi.com/api/character/?name=rick&status=alive

  

  useEffect(() => {

    getData()


  }, [])

 

const handleOnchage =( e:any )=>{

  setinput( e.target.value )


}

const handleSubmit = async ()=>{


  const resp = await axios.get( `https://rickandmortyapi.com/api/character/?name=${input}&status=alive` )

  setdata( resp.data.results)
  

}


  const anterior = async ()=>{

      setPagina( pagina -1 )
      //"https://rickandmortyapi.com/api/character/?page=2"

      const resp = await axios.get( `https://rickandmortyapi.com/api/character/?page=${pagina} ` )

      setdata( resp.data.results)

  }

  const siguiente = async ()=>{

    setPagina( pagina + 1 )
    //"https://rickandmortyapi.com/api/character/?page=2"

    const resp = await axios.get( `https://rickandmortyapi.com/api/character/?page=${pagina} ` )

    setdata( resp.data.results)

}


  const getData = async () => {

    const resp = await axios.get('https://rickandmortyapi.com/api/character')



    setPaginas(resp.data.info.pages)
    setdata(resp.data.results)


  }



  return (
    <>

      <div className='search' >
          
          <label htmlFor="">Buscar</label>
          <input type="text" onChange={ (e)=>handleOnchage(e) } />
          <button onClick={ handleSubmit } >Buscar </button>

      </div>

      <div >

          <div className='pagination' >
            <button onClick={ anterior } >Anterior</button>
              <p> Pagina {pagina} de { paginas } </p>
              <button onClick={siguiente} >Siguiente</button>
          </div>

      </div>


      <div className='container' >





        {

          data && data.length && data.map((character: any) => {

            console.log(character.status )

            if (character.status !== 'unknown') {

              return (

                <div className='card' key={character.id}>
                  <img className='img_card' src={character.image} alt="" />
                  <h3 className='title_card' > {character.name} </h3>
                  <p>{character.gender} </p>
                  <p>{character.species} </p>
                  {character.episode.map((episode: any, index: any) => (

                    <p> Episode: {index + 1}  </p>

                  ))}

                </div>
              )
            }else{
              <></>
            }
          })
        }
      </div>

    </>
  )
}

export default App
