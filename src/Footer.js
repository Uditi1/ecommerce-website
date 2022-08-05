import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
        <div className='footer_wrap'>
        <div className='footer_container'>
            <div className='footer_optionlistone'>
                <div className='footer_optionone'>
                    <img src='./images/logo.png' alt=''  />
                </div>
                <p>who are we?</p>
                <p>Careers</p>
                <p>Testimonials</p>
                <p>Responsible Disclosure</p>
                <p>investor Relations</p>
            </div>

            <div className='footer_optionlisttwo'>
                <div className='footer_optiontwo'>
                <h4>Help</h4>
                </div>
                <p>Contact Us</p>
                <p>Cancellation & Return</p>
                <p>Shipping & Delivery</p>
                <p>Sell on ecom</p>
            </div>

            <div className='footer_optionlistthree'>
                <div className='footer_optionthree'>
                    <h4>Make Money with Us</h4>
                </div>
                <p>Sell on ecom</p>
                <p>Become an Affiliate</p>
                <p>Fulfilment by ecom</p>
                <p>Advertise your Product</p>
            </div>

            <div className='footer_optionlistfour'>
                <div className='footer_optionfour'>
                    <h4>Top Categories</h4>
                </div>
                <p>Skin</p>
                <p>Hair</p>
                <p>Personal Care</p>
                <p>Appliances</p>
            </div>

        </div>
        
        </div>

    </div>
  )
}

export default Footer