import React from 'react';
import './Nav.css'
import requests from '../services/requests';

function Nav({ setSelectedItem }) {
    return (
        <div className ='nav'>
            <h2 onClick={() => setSelectedItem(requests.fetchOrdinaryDrinks)}>
                Simple cocktail
            </h2>
            <h2 onClick={() => setSelectedItem(requests.fetchCocktail)}>
                Cool Cocktail
            </h2>
            <h2 onClick={() => setSelectedItem(requests.fetchMilkShake)}>
                Milk/ Shake/ Float
            </h2>
            <h2 onClick={() => setSelectedItem(requests.fetchCocoa)}>
                Cocoa
            </h2>
            <h2 onClick={() => setSelectedItem(requests.fetchShot)}>
                Shot
            </h2>
            <h2 onClick={() => setSelectedItem(requests.fetchCoffee)}>
                Coffee/ Tea
            </h2>
            <h2 onClick={() => setSelectedItem(requests.fetchHomemade)}>
                Home-made Liqueur
            </h2>
            <h2 onClick={() => setSelectedItem(requests.fetchPunch)}>
                Party Drink cocktail
            </h2>
            <h2 onClick={() => setSelectedItem(requests.fetchBeer)}>
                Beer cocktail
            </h2>
            <h2 onClick={() => setSelectedItem(requests.fetchSoftDrink)}>
                Soft Drink/ Soda
            </h2>
            <h2 onClick={() => setSelectedItem(requests.fetchUnknown)}>
                Unknown
            </h2>
        </div>
    );
}

export default Nav;