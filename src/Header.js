import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import './Header.css';

function Header() {

          const [{ basket, user }, dispatch] = useStateValue();


          const handleAuthenticaton = () => {
            if (user) {
              auth.signOut();
            }
          }


          return (
                  <div className="header">
                          <Link to="/">
                                <img
                                    className="header_logo"
                                    src="./images/logo.png" alt=""
                                />
                          </Link>
                    

                    <div className="header_search">
                            <input className="header_searchInput" type="text" />
                            <div className="header_searchIcon">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                      
                    </div>

                    <div className="header_nav">

                            <Link to={!user && '/login'}>
                                  <div onClick={handleAuthenticaton} className="header_option">
                                        <span className="header_optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
                                        <span className="header_optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                                  </div>
                            </Link>
                      

                            <Link to="/orders">
                                  <div className="header_option">
                                        <span className="header_optionLineOne">Returns</span>
                                        <span className="header_optionLineTwo">& Orders</span>
                                  </div>
                            </Link>

                            <Link to="/checkout">
                                  <div className="header_optionBasket">
                                          <i class="fa-solid fa-cart-shopping"></i>
                                          <span className="header_optionLineTwo header_basketCount">
                                            {basket?.length}
                                          </span>
                                  </div>
                            </Link>
                      
                    </div>
                  </div>
          )
}

export default Header