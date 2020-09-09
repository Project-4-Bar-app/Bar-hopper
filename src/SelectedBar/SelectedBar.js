import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import Drinks from '../components/Drinks';
import requests from '../services/requests';
import Row from './Row';
import { Cocktails, ShotCombos, Draft, Bottle, Canned, Wine } from '../Data/data';
import axios from 'axios';
import BarBanner from './BarBanner';
import { useParams } from 'react-router-dom';

const SelectedBar = () => {
// const [selectedItem, setSelectedItem] = useState(requests.fetchOrdinaryDrinks)

const [bar, setBar] = useState({})
const [image, setImage] = useState([])
const {id, loc} = useParams();

useEffect( () => {
  async function fetchData() {
    const res = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/${id}?${loc}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
      }
      })

    console.log(res.data);
    setBar(res.data)
    setImage(res.data.photos[Math.floor(Math.random() * 2)])
  }
  fetchData();
}, [id, loc] )


    return (
        <div>

            {/* <Nav setSelectedItem={setSelectedItem} />

            <Drinks selectedItem={selectedItem}/> */}

            <BarBanner bar={bar} image={image}/>

            <Row type='Cocktails' drinks={Cocktails} />
            <span></span>
            <Row type='ShotCombos' drinks={ShotCombos} />
            <span></span>
            <Row type='Draft' drinks={Draft} />
            <span></span>
            <Row type='Bottle' drinks={Bottle} />
            <span></span>
            <Row type='Canned' drinks={Canned} />
            <span></span>
            <Row type='Wine' drinks={Wine} />
            <span></span>
            
        </div>
    );
};

export default SelectedBar;

