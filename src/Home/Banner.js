import React from 'react';
import './Banner.css'
import { Button } from '@material-ui/core';

const Banner = () => {
    return (
        <div className="banner">
            <div className='banner__info'>
                <h1> Let us help you to optimize your bar experience </h1>
                <h5> Find a bar and get a drink with ease. Let's uncover hotspots you couldn't believe. </h5>
                <Button variant='outlined'>Explore Bars</Button>
            </div>
        </div>
    );
};

export default Banner;