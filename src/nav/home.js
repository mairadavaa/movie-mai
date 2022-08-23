import React from "react";
import Cart from '../components/cart';
import { useKinodataContext } from "../context/kinodataContext";


const Home = () => {

    const { movies } = useKinodataContext()


    return (
        <div>

            <div style={{ display: "flex", justifyContent: "center" }}><h1>Кино жагсаалт</h1></div>
            <div className="Movie">

                { movies.map((el, index) =>
                    <div className="Kino" >
                        <Cart index={index}/>
                    </div>

                )
                }

            </div>
        </div>
    )
}
export default Home