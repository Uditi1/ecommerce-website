import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
        return (
                <div className="home">
                        <div className="home_container">
                              <img
                                  className="home_image"
                                  src="./images/banner3.png" 
                                  alt=""
                              />

                      <div className="home_rowone">
                            <Product 
                              id="12321341"
                              title="TIMEX Analog Men's Watch  Case Shape: Round, Dial Glass Material: Mineral, Band material: Leather
                                    Watch Movement Type: Quartz, Watch Display Type: Analog  "
                              price={11.96}
                              rating={5}
                              image="./images/watch.png"
                            />
                            <Product
                              id="49538094"
                              title="Mivi Duopods A25 Bluetooth Truly Wireless in Ear Earbuds with Mic with 
                                    40Hours Battery, 13Mm Bass Drivers & Made in
                                    India. with Immersive Sound Quality, Voice Assistant, Touch Control (Black)"
                              price={1999.0}
                              rating={4}
                              image="./images/earphone.png"
                            />

                      </div>

                      <div className="home_rowtwo">
                              <Product 
                                  id="4903850"
                                  title="Men Blue & Tan Leather Bag ,Blue and tan solid laptop bag
                                        Two handles with detachable sling strap "
                                  price={499.99}
                                  rating={3}
                                  image="./images/laptop_bag.png"
                              />
                              <Product 
                                  id="23445930"
                                  title="Dove Unisex Hair Fall Rescue Shampoo with Glycerin 80 ml"
                                  price={98.99}
                                  rating={5}
                                  image="./images/dove.png"
                              />
                              <Product 
                                  id="3254354345"
                                  title="Puma back shoes great qualtiy and comfortable sole for men "
                                  price={598.99}
                                  rating={4}
                                  image="./images/puma_shoes.png"
                              />
                      </div>

                      <div className="home_rowthree">
                              <Product 
                                  id="90829332"
                                  title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED 
                                        Smart TV UA32T4340BKXXL (Glossy Black) "
                                  price={1094.98}
                                  rating={4}
                                  image="./images/tv.png"
                              />
                      </div>


                        </div>

                </div>
            )
}

export default Home;