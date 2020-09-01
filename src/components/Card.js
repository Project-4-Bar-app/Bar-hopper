import React from 'react';
import './Card.css'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

const Card = ({ name, src, phone, rating, address }) => {
    function getRating(rate) {
        switch (rate) {
            case 0.5:
                return <StarHalfIcon />
            case 1:
                return <StarIcon /> 
            case 1.5:
                return <div className="rating"><StarIcon /> <StarHalfIcon /> </div>
            case 2:
                return <div className="rating"><StarIcon /> <StarIcon /> </div>
            case 2.5:
                   return <div className="rating"><StarIcon /> <StarIcon /> <StarHalfIcon /></div>
            case 3:
                 return <div className="rating"><StarIcon /> <StarIcon /> <StarIcon /></div>
            case 3.5:
                 return <div className="rating"><StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon /></div>
            case 4:
                 return <div className="rating"><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> </div>
            case 4.5:
                return <div className="rating"><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarHalfIcon /></div>
                
            default:
                return <div className="rating"><StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> <StarIcon /> </div>
                
        }
    }
    return (
        <div className='card'>
            <img  src={src} alt="" />
            <div className = 'card__info'>
                <h2>{name}</h2>
                <div className="rating">
                {getRating(rating)}
                </div>
                <h4>{phone}</h4>
                <h4>{address}</h4>
            </div>
            
        </div>
    );
};

export default Card;
