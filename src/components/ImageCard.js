import React from 'react';
import './ImageCard.css'
import { useStateValue } from '../services/StateProvider';

function ImageCard({ drink }){

    const[{ basket },dispatch] = useStateValue();

    const addToBasket = () => {
        // Adding item to basket
        dispatch({
            type: 'ADD_TO_BASKET',
            payload:{
                id: drink.id,
                name: drink.name,
                imageUrl: drink.imageUrl,
                ingredients: drink.ingredients,
                style: drink.style ,
                type: drink.type,
                price: drink.price,
            }
        })
        
    };
    return (
        <div className="imageCard">
            <img src={`${drink.imageUrl}`} alt={`${drink.imageUrl}`} />
            <h2>{drink.name}</h2>
            <div className="imageCard__info">
                <p>{drink.ingredients && `Ingredients: ${drink.ingredients}`}</p>
                <p>{drink.style && `Style: ${drink.style} beer`}</p>
                <p>{drink.type && `Type: ${drink.type} wine`}</p>
                <div className="imageCard__drinkOrder">
                    <h3>{`$${drink.price}.00`}</h3>
                    <button onClick={addToBasket}>order drink</button>
                </div>
            </div>
        </div>
    );
}

export default ImageCard;