import React from 'react';
import './BarResult.css'
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';

function BarResult({ bar }) {
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
        <div className='barResult'>
            <img  src={bar.image_url} alt={bar.name} />
            <div className = 'barResult__info'>
                <div className = 'barResult__infoTop'>
                    <p>Address: {bar.location?.display_address}</p>
                    <h3>{bar?.name}</h3>
                    <p>_______</p>
                    <p>Currently: <span style ={{color: bar?.is_closed ? "red" : "green"}}>{bar?.is_closed ? "Closed" : "Open"}</span>    </p>
                    <p>{bar?.display_phone && `Phone Number: ${bar?.display_phone}`}</p>
                </div>
                <div className = 'barResult__infoBottom'>
                    <div className="barResult__rating">
                         {getRating(bar?.rating)}
                         <p>{bar?.review_count} {bar?.review_count > 1 ? "reviews" : "review"}</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default BarResult;