import React from "react";
import { useKinodataContext } from "../context/kinodataContext";
import { Link } from "react-router-dom";

const Cart = ({ index, change
}) => {

    const { movies, setChosenMovie } = useKinodataContext()
    let { name, profile, date, time } = movies[index];


    return (
        <div className="Kino" onClick={() => setChosenMovie(movies[index])}>
            <Link to="/about">
                <img src={profile}
                    style={{
                        width: "250px",
                        height: "400px",
                        borderRadius: "5%",
                        border: "3px solid black"
                    }}
                    alt=""
                   />
            </Link>
            <h3>{name}</h3>
            <div style={{ display: "flex", flexDirection: "row", width: "180px", justifyContent: "space-around" }}>

                <h4>{date}</h4>
                <h4>{time}</h4>

            </div>
            <div style={{ display: "flex", justifyContent: "end" }}>

                <button className="Button">
                    <Link to ='/about'>Дэлгэрэнгүй </Link>
                </button>
            </div>
        </div>
    )
}
export default Cart