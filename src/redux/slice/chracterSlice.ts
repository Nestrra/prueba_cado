


import { createSlice } from "@reduxjs/toolkit";
import { Character } from "../../interfaces/appinterfaces";


interface CharacterProps {
    url:string
    paginas:number
    characters: Character[];
    isLoading: boolean;
    next: string;
    previus: string

}


const initialState: CharacterProps = {
    url:'https://rickandmortyapi.com/api/character',
    characters: [],
    paginas:0,
    isLoading: false,
    next: '',
    previus: ''
}



export const characterSlice = createSlice({

    name: 'characters',
    initialState,
    reducers: {
        starCharacters: (state) => {
            state.isLoading = true
        },
        setCharacter: (state, action) => {

            state.characters = action.payload;
            state.isLoading = false;
            state.next=action.payload
            state.previus = action.payload

        },
        setNext: (state, action) => {

           
            state.isLoading = false;
            state.next=action.payload
           

        },
        setPrevius: (state, action) => {

            
            state.isLoading = false;
            state.previus=action.payload
           

        },
        setPaginas: (state, action) => {

            
            state.isLoading = false;
            state.paginas=action.payload
                       

        }
    }
})



export const { setCharacter, starCharacters, setNext, setPrevius, setPaginas } = characterSlice.actions

