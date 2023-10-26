import {useState, useEffect } from "react";
import axios from "axios";

// import CountryCard from "./components/CountryCard.js"

const Home = () =>{
    const [countriesList, setCountriesList] = useState([]);
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all')
        .then(response =>{
            console.log(response.data);

            setCountriesList(response.data)
        })
        .catch(error => {
            console.log(error)
        });
    },[])
    return(
        <h1>Home Page</h1>
    )
}
export default Home