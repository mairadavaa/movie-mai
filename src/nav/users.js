import React from "react";
import { useKinodataContext } from "../context/kinodataContext";
import { Link } from "react-router-dom";
import { useState } from "react"
import { useListContext } from "../context/listContext";
const Users = () => {
    const { chosenMovie } = useKinodataContext()
    let { name, profile} = chosenMovie;
    const {list, setList}=useListContext()
    const [counter, setCounter] = useState(0);
    const [childcounter, setChildCounter] = useState(0);
    const [time,setTime] = useState();
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setList({ ...list, [id]: value });
        
    }
    const getTime = (e)=>{
        const {id} = e.target
        setTime(id)
    }
    const ConsoleLog = (e) => {

        if (list.email.includes(".com")) {
            setList ({...list, adultTicket:counter, childTicket:childcounter, time:time })
            console.log (list)
            
        } else {
            alert("email xayg ni aldaatai")
        }

    }
    // buh listiin datag haruulah heseg urgeljluuleh gdg button dr ajilna
    // 
    return (
        <div className="Description">
            <div>
                <img src={profile}
                    style={{
                        width: "500px",
                        height: "600px",
                        borderRadius: "5%",
                        border: "3px solid black"
                    }} alt="movie" />
            </div>
            <div>

                <h1>{name}</h1>
                <div>

                    <h4> Захиалгын хэсэг </h4>

                    <div id="MyDIV" className="Login">

                        <label>Нэр</label>
                        <input value={list.firstname} id="firstname" type="text" onChange={handleInputChange} />
                        <label>Имэйл</label>
                        <input value={list.email} id="email" type="email" onChange={handleInputChange} />
                        <label>Утас</label>
                        <input value={list.phonenumber} id="phonenumber" type="number" onChange={handleInputChange} />
                        <label>Том хүн</label>
                        <div className="Box">
                            <div className="Box1" onClick={() => {
                                if (counter === 0) return;
                                setCounter(counter - 1);
                            }}>-</div>
                            <div>{counter}</div>
                            <div className="Box2" onClick={() => setCounter(counter + 1)} >+</div>
                        </div>
                        <label>Хүүхэд</label>
                        <div className="Box">
                            <div className="Box1" onClick={() => childcounter > 0 && setChildCounter(childcounter - 1)}>-</div>
                            <div>{childcounter}</div>
                            <div className="Box2" onClick={() => setChildCounter(childcounter + 1)}>+</div>
                        </div>
                        <div style={{ marginTop: "20px" }}>
                                <h4> Цагаа сонгоно уу </h4>
                            <div className="TimeBox">
                                <button  id ='11:00 AM'className="Time" onClick ={(e) => getTime(e)}>11:00 AM</button>
                                <button  id ='14:00 PM'onClick={(e)=>getTime(e)} className="Time">14:00 PM</button>
                                <button id ='16:00 PM'onClick={(e)=>getTime(e)} className="Time">16:00 PM</button>
                                <button id ='17:00 PM' onClick={(e)=>getTime(e)} className="Time">17:00 PM</button>
                                <button id='20:00 PM' onClick={(e)=>getTime(e)} className="Time">20:00 PM</button>
                                
                            </div>
                            <button className="Button" onClick={() => ConsoleLog()}
                            > <Link to='/price'>Үргэжлүүлэх </Link>
                                </button>
                            <button className="Button">
                                <Link to='/about'>Буцах </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )



}
export default Users