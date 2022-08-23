import { createContext, useContext, useState } from "react";
import {data} from "../components/data/kinodata"
console.log(data);
const KinodataContext = createContext()
export const KinodataProvider =({children})=>{
    const [movies, setMovies] = useState(data);
    const [chosenMovie, setChosenMovie] = useState();
    return(
        <KinodataContext.Provider value={{movies, chosenMovie, setChosenMovie} } >
            {children}
        </KinodataContext.Provider>
    )
}
export const useKinodataContext = () => useContext(KinodataContext)