import React from "react";
import {useKinodataContext} from "../context/kinodataContext";
import { Link } from "react-router-dom";
const About = () =>{
    const {chosenMovie} = useKinodataContext()
    let { name, profile, date, description}=chosenMovie;
    return (
        <div className="Description">
            <div>
                <img src={profile}
                style={{ 
                    width:"500px",
                    height: "600px",
                    borderRadius: "5%",
                     border: "3px solid black" 
                }} alt="movie"/>
            </div>
            <div>
                <h1>{name}</h1>
            <div>

            <h4>Дэлгэцнээ гаргах : {date}</h4>
            <h4>PG|117min</h4>
            <h4>Мэдээлэл</h4>
            <p>{description}</p>
            <button className="Button">
                    <Link to ='/users'>Захиалах </Link>
                </button>
                <button className="Button">
                    <Link to ='/home'>Буцах </Link>
                </button>
            </div>
            </div>

        </div>
    )

       
    
}
export default About