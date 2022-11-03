import { createContext, useContext, useState } from "react";

const SeatContext = createContext()
export const SeatProvider = ({children}) => {
    
    const seatA = new Array(12).fill(false);
    const seatB = new Array(18).fill(false);
    const seatC = new Array(24).fill(false);
    const seatD = new Array(30).fill(false);
    const [chosenSeat, setChosenSeat] = useState(new Array(84).fill(false));
    const [check, setCheckSeat] = useState([])
    const [choosed, setChoosedSeat] = useState([])
  
   
    return(
        <SeatContext.Provider value = {{ seatA, seatB, seatC, seatD,  chosenSeat, setChosenSeat, check, setCheckSeat, choosed, setChoosedSeat}}>
            {children}
        </SeatContext.Provider>
    )
}
export const useSeatContext = () => useContext(SeatContext)