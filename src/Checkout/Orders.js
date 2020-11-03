import React from 'react';
import './Orders.css'
import { useStateValue } from '../services/StateProvider';
import OrderedDrink from './OrderedDrink';
import Subtotal from './Subtotal';

const Orders = () => {
    const[{ basket }] = useStateValue();


    return (
        <div className="checkout">
            {
                basket?.length === 0 ? (
                    <div className='checkout_intro'>
                        <h2>You have made no orders</h2>
                        <p>You have no orders requested. To add to orders, click the "Order drink" button of the drink you prefer.</p>
                    </div>
                ) : (
                        <div className='checkouts'>
                            <div className='checkout_left'>
                                <h2 className='checkout_intro'>Your Orders</h2>
                                {basket.map((item) => (
                                        <OrderedDrink 
                                            key={item.id} 
                                            id={item.id} 
                                            name={item.name} 
                                            imageUrl={item.imageUrl}
                                            ingredients={item.ingredients}
                                            style={item.style}
                                            type={item.type}
                                            price={item.price}
                                            quantity={item.quantity}
                                        /> 
                                    ))} 
                            </div>
                            {basket?.length > 0 && (
                                <div className='checkout_right'>
                                    <Subtotal />
                                </div>
                            )}
                        </div>
                        
                )}
            </div>
    );
};

export default Orders;
