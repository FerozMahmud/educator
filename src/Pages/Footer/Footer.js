// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>

            {/* ..............................................
            ..............Footer part start here............
            .............................................. */}


            {/* ..........top left part of footer section...........  */}
            <div className="row">
                <div className="col-md-4">
                    <div className='pb-4'>
                        <img height='50px' src="./logo.png" alt="" />
                    </div>
                    <div className='contacts'>
                        <h4>Contact Us:</h4>
                        <h6>Address: Level-2, 69, Bolod-tower, Hablugaon, Dhaka</h6>
                        <h6>Website: https://educator-feroz-mahmud.netlify.app</h6>
                        <h6>Helpline : (+88) 02-09253651 (Available : 09:00am to 7:00pm)</h6>
                    </div>
                </div>

                {/* ..........top middle part of footer section...........  */}
                <div className="col-md-4">
                    <div className="footer-menu-container">
                        <h4>Submit your email to get update</h4>
                        <div>
                            <input
                                className="p-2 mt-3"
                                type="text"
                                placeholder="Enter Email"
                            />
                            <button className=" btn text-white bg-success">Submit</button>
                        </div>
                    </div>
                </div>

                {/* ..........top right part of footer section...........  */}
                <div className="col-md-4">
                    <div className="right-footer-container">

                        <h4>Payment Method</h4>
                        <img height='150' src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="" />
                    </div>
                </div>
            </div>

            {/* ..........bottom part of footer section...........  */}
            <div className="row footer-bottom">
                <hr />
                <p>Copyright © 2021 || <strong className='text-primary'>Educator</strong>. All Rights Reserved</p>
                <small>Designed by <span>Feroz Mahmud</span></small>
            </div>
        </div>
    );
};

export default Footer;