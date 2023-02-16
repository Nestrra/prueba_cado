import axios from "axios";
import { CharacterResponse } from "../../interfaces/appinterfaces";
import { setCharacter, setNext, setPaginas, setPrevius, starCharacters } from "./chracterSlice";



export const getCharacters = (url: string) => {

    return async (dispatch: any) => {

        dispatch(starCharacters());
        const resp = await axios.get<CharacterResponse>(url)
        dispatch(setCharacter(resp.data.results ))
        dispatch(setNext(resp.data.info.next ))
        dispatch(setPrevius(resp.data.info.prev ))
        dispatch(setPaginas(resp.data.info.pages ))

    }

}
