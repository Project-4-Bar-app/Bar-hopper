import React from 'react';
import './BarBanner.css';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
function BarBanner({ bar, image }) {
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
        <header className='barbanner'
            style ={{
                backgroundSize: "cover",
                backgroundImage: `url(${image})`,
                backgroundPosition: "center center"
            }}       
        >
            <div className='barbanner__contents'>
                    <h1 className="barbanner__title">{bar?.name}</h1>
                <div className="barbanner__buttons">
                    <button className="barbanner__button">Reviews</button>
                    <button className="barbanner__button">Website</button>
                </div>
                <div className="barbanner__reviews">
                    {getRating(bar.rating)}  
                    <p>{bar.review_count} reviews</p>
                </div>
                <div className='barbanner__details'>
                    <h3>Address: {bar.location?.display_address}</h3>
                    <h3>Phone Number: {bar?.display_phone}</h3>
                    <h3 >currently: <span style ={{color: bar?.is_closed ? "red" : "green"}}>{bar?.is_closed ? "Closed" : "Open"}</span></h3>
                </div>
            </div> 
            <div className='barbanner-fadeBottom'/>
        </header>
    );
}

export default BarBanner;

//href={projects[1].githubrepourl} className="button" target="_blank"