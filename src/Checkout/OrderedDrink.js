import React from 'react';
import './OrderedDrink.css'
import { useStateValue } from '../services/StateProvider';

function OrderedDrink({ id, name, imageUrl, ingredients, style, type, price, quantity }){

    const [ , dispatch] = useStateValue();

    const RemoveFromBasket = () => {
        // remove item from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id,
        })

    }
    return (
        <div className='orderedDrink'>
            <img src={`${imageUrl}`} alt={`${imageUrl}`} />
                <div className="orderedDrink__info">
                    <p className="orderedDrink__name">{name}</p>
                    <p>{ingredients && `Ingredients: ${ingredients}`}</p>
                    <p>{style && `Style: ${style} beer`}</p>
                    <p>{type && `Type: ${type} wine`}</p>   
                    <p>{`Quantity: ${quantity} ordered`}</p>                
                    <p className="orderedDrink__price"><small>$</small><strong>{`${price}.00 each`}</strong></p>
                    <button onClick={RemoveFromBasket}>Cancel order</button>                   
                </div>
        </div>
    );
};

export default OrderedDrink;