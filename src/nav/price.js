
import { Link } from "react-router-dom";
import {CreateUser, GetData, useReadDoc} from "../components/hook";

import React, {useEffect} from "react";
import { useListContext } from "../context/listContext";
import { useSeatContext } from "../context/seatContext";
import { collection, getDocs, serverTimestamp } from "firebase/firestore";
import { useKinodataContext } from "../context/kinodataContext";


const Price = () => {

    const { seatA, seatB, seatC, seatD, setChosenSeat, chosenSeat, check, setCheckSeat, choosed, setChoosedSeat } = useSeatContext();
    const { chosenMovie } = useKinodataContext()
    let { name, profile, date } = chosenMovie;
    const { list, setList } = useListContext()
    let { firstname, email, phonenumber, adultTicket, childTicket, time } = list;

    let sumticket = adultTicket + childTicket
    let price = adultTicket * 10000 + childTicket * 5000

    const count = chosenSeat.filter(chosenseat => chosenseat === true)
    if (count.length - 1 >= sumticket) {
        alert("cuudliin too dyyrlee")
    }
    const checkSeat = (e) => {
        const { id } = e.target
        setCheckSeat([...check, id])
    }
    useEffect(()=>{
        
        GetData(choosed)
        console.log (choosed)
    },[])
    const Test = () =>{
        CreateUser(chosenMovie, list, price, check);
        list.firstname =""
        list.email=""
        list.phonenumber=""
    }
    return (

        <div className="Price">
            <h1>Суудлаа сонгоно уу</h1>
            <div className="SumSeat">
                <label> Дэлгэц</label>
                <div>
                    <label> A</label>
                    {seatA.map((el, ind) =>
                        <input disabled={true} id={",  A" + ind} onClick={(e) => checkSeat(e)} type="checkbox" className="Seat" onChange={() => setChosenSeat(chosenSeat.map((element, index) => ind === index ? !element : element))}></input>
                    )}
                </div>
                <div>
                    <label> B</label>
                    {seatB.map((el, ind) =>
                        <input id={",   B" + ind} onClick={(e) => checkSeat(e)} type="checkbox" className="Seat" onChange={() => setChosenSeat(chosenSeat.map((element, index) => ind + 12 === index ? !element : element))}></input>
                    )}
                </div>
                <div>
                    <label> C</label>
                    {seatC.map((el, ind) =>
                        <input id={",  C" + ind} onClick={(e) => checkSeat(e)} type="checkbox" className="Seat" onChange={() => setChosenSeat(chosenSeat.map((element, index) => ind + 30 === index ? !element : element))}></input>
                    )}
                </div>
                <div>
                    <label> D</label>
                    {seatD.map((el, ind) =>
                        <input id={",  D" + ind} onClick={(e) => checkSeat(e)} type="checkbox" className="Seat" onChange={() => setChosenSeat(chosenSeat.map((element, index) => ind + 54 === index ? !element : element))}></input>
                    )}
                </div>

            </div>
            <h1>Төлбөр төлөх хэсэг</h1>
            <div className="Tulbur">
                <div>
                    <div className="Rrr"> <span>Хэрэглэгчийн нэр:</span> <h4>{firstname}</h4></div>
                    <div className="Rrr"> <label>Утасны дугаар:</label> <h4>{phonenumber}</h4></div>
                    <div className="Rrr"> <label>Том хүн:</label> <h4>{adultTicket} хүн - {adultTicket * 10000} ₮</h4></div>
                    <div className="Rrr"> <label>Хүүхэд:</label> <h4>{childTicket}хүүхэд - {childTicket * 5000} ₮</h4></div>
                    <div className="Rrr"> <label>Үзвэрийн нэр:</label> <h2>{name}</h2></div>
                    <div className="Rrr"> <label> өдөр:</label> <h4>{date}</h4></div>
                    <div className="Rrr"> <label> цаг:</label> <h4>{time}</h4></div>

                    <div className="Rrr"><label>Cуудлын тоо:</label> <p>{sumticket}</p> </div>
                    <div className="Rrr"><label>Cуудал:</label> <p>{count.length}</p> </div>
                    <div className="Rrr"><label>Cуудалын дугаар:</label> <p>{check}</p> </div>
                    <button className="Button"  onClick={Test} >
                        <Link to='/home'>Төлөх</    Link>
                    </button>
                    <button className="Button">
                        <Link to='/users'>Буцах</Link>
                    </button>
                </div>
                <div className="Zurag">
                    <img src={profile}
                        style={{
                            width: "250px",
                            height: "350px",
                            borderRadius: "5%",
                            border: "3px solid black"
                        }} alt="movie" />
                </div>
            </div>

        </div>
    )
}



export default Price