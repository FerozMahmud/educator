import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {

    return (
        < div className='errorStyle text-center' >

            {/* ...........................................
            .................404 error page here............
            ............................................ */}

            <h1><strong>Oops!!!</strong></h1>
            <img src="https://i.pinimg.com/originals/11/dc/96/11dc96d2e4daca3ea8ff6aa41299b5e1.gif" alt="" height='500' />
            <h5 className='back-click'>Don't worry, click here 🢃🢃🢃 to back home...</h5>
            <Link className='back-link' to="/home">Back To Home</Link>
        </div >
    );
};

export default Error;