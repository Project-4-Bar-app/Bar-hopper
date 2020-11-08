import React, { useEffect, useState } from 'react';
import './ExploreBars.css';
import axios from 'axios';
import BarResult from './BarResult';
import SkeletonBarResult from '../skeletons/SkeletonBarResult';

function ExploreBars(props) {

    const [bars, setBars] = useState({})

    useEffect( () => {
    async function fetchData() {
        const res = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?term=bars&latitude=40.714232&longitude=-73.961289`, {
            headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
        })

        setBars(res.data)
    }
    fetchData();
    },[] )

    return (
        <div className="exploreBars">
                {bars && bars.businesses?.map((bar) => (
                        <BarResult key={bar.id} bar={bar} />
                    ))} 

                {!bars && [1,2,3,4,5].map((n) => <SkeletonBarResult key={n} theme='dark' />)} 
        </div>
            
    );
}

export default ExploreBars;