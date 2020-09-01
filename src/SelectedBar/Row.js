import React from 'react';
import './Row.css'
import ImageCard from '../components/ImageCard';

const Row = ({type, drinks}) => {
    return (
        <div className='row'>
            <h2>{type}</h2>

            <div className="row__drinks">
                {drinks.map((drink) => (
                        <ImageCard key={drink.id} drink={drink} /> 
                    ))} 
            </div>
            
        </div>
    );
};

export default Row;