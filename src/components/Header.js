import React, { useState, useEffect, Fragment } from 'react';
import './Header.css'
// import HomeIcon from '@material-ui/icons/Home';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import ExploreIcon from '@material-ui/icons/Explore';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import { useStateValue }from '../services/StateProvider';
import { Link } from 'react-router-dom';
import { getQuantity } from '../services/reducer';

function Header({navOption, setNavOption, locate}) {
    const [{ basket }] = useStateValue()
    // const location = useLocation()
    // const[location, setLocation] = ()

    // const [nav, setNav] = useState(1)

    // useEffect (() => {
    //     setNav(navOption)
    // },[navOption])

   
    console.log(locate);

    
    return (
        <div className='header'>
            <div className="header__icons">
                <Link className="link" to="/" onClick={() => setNavOption(1) }>
                    <img src="https://cdn.logojoy.com/wp-content/uploads/2018/07/30132759/bar6.png" alt="" />
                </Link>

                { navOption > 1 && 
                    <Fragment>
                    <Link className="link" to={locate} onClick={() => setNavOption(2)} > 
                        <div className={navOption === 2 ? "header__icon header__icon--active" : "header__icon" }>
                            <LocalBarIcon />
                            <p>Drink Menu</p>
                        </div> 
                    </Link> 
                

                    <Link className="link" to='/explore' onClick={() => setNavOption(3)} > 
                        <div className={navOption === 3 ? "header__icon header__icon--active" : "header__icon" }>
                            <ExploreIcon /> 
                            <p>Explore</p>
                            {/* <RecordVoiceOverIcon />
                            <p>Reviews</p> */}
                        </div>
                    </Link>

                    </Fragment>
                }

                {/* <div className="header__icon">
                    <ExploreIcon />
                    <p>Explore</p>
                </div>    */}

            </div>
            { navOption > 1 && 
                    <Fragment>
                        <Link className="link" to="/orders" onClick={() => setNavOption(4)}>
                            <div className={navOption === 4 ? "header__icon header__icon--active" : "header__icon" }>
                                <div className="header__basket">
                                    <ShoppingCartIcon />
                                    <span className="header__basketCount">{getQuantity(basket)}</span>
                                </div>
                                <p>Orders</p>
                            </div>
                        </Link>
                    </Fragment>
            }
            
        </div>
    );
}

export default Header;


