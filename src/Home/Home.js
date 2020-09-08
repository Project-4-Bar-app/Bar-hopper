import React from 'react';
import './Home.css'
import Banner from './Banner';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Home = ({ setNavOption }) => {
    return (
        <div className="home"> 
            <Banner /> 

            <div className='home__section'>
               <Link to="/menu/union-pool-brooklyn-2?osq=union+pool" onClick={() => setNavOption(2)}>
                <Card 
                        name='Union Pool'
                        src="https://s3-media3.fl.yelpcdn.com/bphoto/sUl0_E7r9XK1pIYuWyxeUw/o.jpg"
                        phone="(718) 609-0484"
                        rating={3.5}
                        address="484 Union Ave, Brooklyn, NY 11211"
                    />
                </Link> 
                <Link to="/menu/luckydog-brooklyn?osq=Lucky+Dog" onClick={() => setNavOption(2)}>
                    <Card 
                        name='Luckydog'
                        src="https://s3-media3.fl.yelpcdn.com/bphoto/1pM2Zvmr_MTb-0pHsN68aw/o.jpg"
                        phone="(347) 294-4971"
                        rating={4.0}
                        address= "303 Bedford Ave Brooklyn, NY 11211"
                    />
                </Link> 
               <Link to="/menu/trophy-bar-brooklyn?osq=Trophy+Bar" onClick={() => setNavOption(2)}> 
                <Card 
                        name='Trophy Bar'
                        src="https://s3-media2.fl.yelpcdn.com/bphoto/x-c5ZXjf4q-lyvyG5ugZXQ/o.jpg"
                        phone="(347) 227-8515"
                        rating={4.0}
                        address= "351 Broadway Brooklyn, NY 11211"
                    />
                </Link> 
            </div>      
        </div>
    );
};

export default Home;

