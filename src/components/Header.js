import React, { useState, useEffect, Fragment } from 'react';
import './Header.css'
import HomeIcon from '@material-ui/icons/Home';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import ExploreIcon from '@material-ui/icons/Explore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import { useStateValue }from '../services/StateProvider';
import { Link } from 'react-router-dom';

function Header({navOption, setNavOption}) {
    const [{ basket }] = useStateValue()

    // const [nav, setNav] = useState(1)

    // useEffect (() => {
    //     setNav(navOption)
    // },[navOption])

    

    return (
        <div className='header'>
            <div className="header__icons">
                <Link className="link" to="/" onClick={() => setNavOption(1) }>
                    <div className= {navOption === 1 ? "header__icon header__icon--active" : "header__icon" }>
                        <HomeIcon />
                        <p>Home</p>
                    </div>
                </Link>

                { navOption > 1 && 
                    <Fragment>
                    <div className={navOption === 2 ? "header__icon header__icon--active" : "header__icon" }>
                    <Link className="link" to="/menu" onClick={() => setNavOption(2)} > <LocalBarIcon /></Link> 
                        <p>Drink Menu</p>
                    </div> 
                


                    <div className={navOption === 3 ? "header__icon header__icon--active" : "header__icon" }>
                        <RecordVoiceOverIcon />
                        <p>Reviews</p>
                    </div>

                    <Link className="link" to="/orders" onClick={() => setNavOption(4)}>
                        <div className={navOption === 4 ? "header__icon header__icon--active" : "header__icon" }>
                            <div className="header__basket">
                                <ShoppingCartIcon />
                                <span className="header__basketCount">{basket?.length}</span>
                            </div>
                            <p>Orders</p>
                        </div>
                    </Link>
                    </Fragment>
                }

                {/* <div className="header__icon">
                    <ExploreIcon />
                    <p>Explore</p>
                </div>    */}

            </div>
            <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30132759/bar6.png" alt="" />
        </div>
    );
}

export default Header;


