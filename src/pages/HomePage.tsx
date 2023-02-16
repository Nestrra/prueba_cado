


import React from 'react'
import { useEffect } from 'react'
import { Card } from '../components/Card'
import { Pagination } from '../components/Pagination';
import { Search } from '../components/Search';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { getCharacters } from '../redux/slice/thunks';

export const HomePage = () => {


    const {url, isLoading, characters, next, previus } = useAppSelector((state) => state.characterReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {

        dispatch(getCharacters(url))

    }, [])



 

    return (

        <div className='container' >

           <Search />

            <div className='container_cards' >
                {
                    isLoading ?

                        <p> Cargando.... </p>
                        :
                        characters.map((character) => (

                            character.status !== 'unknown' ?



                            <Card
                                key={ character.id }
                                specie={character.species}
                                img={character.image}
                                name={character.name}
                                gender={character.gender}
                                status={character.status}
                                episodes={character.episode}
                            />
                            :<></>
                        ))
                }
            </div>

                    <Pagination />

        </div>
    )

}
