import React, { useState } from 'react';
import './ImageCard.css'
import { useStateValue } from '../services/StateProvider';
import Modal from './Modal';
import { Button, Avatar } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';

function ImageCard({ drink }){
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState(1)

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
                quantity: Number(input)
            }
        })
        setIsOpen(false)
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
                    <button onClick={() => setIsOpen(true)}>Order Drink</button>
                </div>
            </div>
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <div className="modal">
                    <div className="modal__header">
                        <div className="modal__confirm">
                            <CheckIcon />
                            <p>Order Confirmed</p>
                        </div>
                        <span className="modal__closebtn" onClick={() => setIsOpen(false)}>x</span>
                    </div>
                    <div className="modal__body">
                        <Avatar src= {`${drink.imageUrl}`}/>
                        <h5> {drink.name} added to to cart. </h5>
                        <form>
                        <label for="quantity">Quantity:</label>
                        <input type="number" onChange={ e => setInput(e.target.value)} value={input}  min="1" max="10" />
                        </form>    
                        <Button variant='outlined' type="submit" onClick={addToBasket} >Confirm</Button>                   
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ImageCard;