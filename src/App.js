import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';
import Footer from './Footer';
import Categories from './Categories';

const promise =loadStripe('pk_test_51LEvKYSGAbL3wbW6dqCBnPD0wtvWINaURSal55Xdsp7vy6tG9yjffooG9oPv8pNV79yDaKVbWxw4e4GoRHYKPSA2009uV0iuSR');

function App() {

          const [{ }, dispatch] = useStateValue();


          useEffect(() => {
              // will only run once when the app component loads...

                  auth.onAuthStateChanged((authUser) => {
                        console.log("THE USER IS >>> ", authUser);

                        if (authUser) {
                          // the user just logged in / the user was logged in

                              dispatch({
                                type: "SET_USER",
                                user: authUser,
                          });
                        } else {
                              // the user is logged out
                              dispatch({
                                type: "SET_USER",
                                user: null,
                          });
                        }
                  });
          }, []);


          return (

                <Router>
                      <div className="App">
                            <Routes>

                                  <Route path="/" element={[<Header />, <Categories />, <Home />, <Footer />]} />

                                  <Route path="/checkout" element={[<Header />, <Checkout />, <Footer />]} />

                                  <Route path="/login" element={[<Login />]} />

                                  <Route path='/payment' element={[<Header />, <Elements stripe={promise}><Payment /></Elements>, <Footer />]} />

                                  <Route path='/orders' element={[<Header />, <Orders />]} />


                            </Routes>
                      </div>
                </Router>
          );
}

export default App;
