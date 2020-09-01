import React from 'react';
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../services/StateProvider';
import { getBasketTotal } from '../services/reducer';

function Subtotal(props) {
    const [ {basket}, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <p>
                        subtotal ({basket.length} drinks) : <strong>{` ${value}`}</strong>
                    </p>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Checkout</button>   
        </div>
    );
}

export default Subtotal;