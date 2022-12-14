import React, {useEffect, useState}from "react";
import { doc, setDoc, collection, getDocFromCache, getDocs, serverTimestamp } from "firebase/firestore"; 
// import { useSeatContext } from "../context/seatContext";
import { initializeApp } from "firebase/app";


import {
    getFirestore,
    addDoc,
} from "firebase/firestore";

const firebaseConfig = {

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const CreateUser = async (chosenMovie, list, price, check) => {

    try {
        const docRef = await addDoc(collection(db, "users"), {
            created: serverTimestamp(),
            movieName: chosenMovie.name,
            movieDate: chosenMovie.date,
            movieTime: list.time,
            usersName: list.firstname,
            usersPhone: list.phonenumber,
            usersEmail: list.email,
            adultTicket: list.adultTicket,
            childTicket: list.childTicket,
            sumPrice: price,
            seatnumber: check
        });
        console.log("Document written with ID: ", docRef.id);

    } catch (error) {
        alert(error, "aldaatai");
    }
};






    // ------firebase medeelelee butaaj oruulax
    export const GetData = async (choosed) => {
        // const {choosed, setChoosedSeat }=useSeatContext();
        const seatInput = document.querySelectorAll(".Seat")
        const querySnapshot = await getDocs(collection(db, "users"));
        console.log(doc.data());

        // querySnapshot.forEach((doc) => {
        //     const name = doc.data().movieName
        //     const moTime = doc.data().movieTime
        //     setChoosedSeat([...choosed, doc.data().seatnumber]);
        // });
    }



