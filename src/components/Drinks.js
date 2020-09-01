import React, { useState, useEffect } from 'react';
import './Drinks.css'
import ImageCard from './ImageCard';
import axios from '../services/axios';
import FlipMove from 'react-flip-move';

function Drinks({ selectedItem }) {
    const[drinks, setDrinks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get(selectedItem)
            // console.log(req);
            setDrinks(req.data.drinks)
            return req;
        }

        fetchData()
    }, [selectedItem])
    return (
        <div className="drinks">
            <FlipMove>
                {drinks.map((drink) => (
                    <ImageCard key={drink.idDrink} drink={drink} /> 
                ))} 
            </FlipMove>
        </div>
    );
}

export default Drinks;