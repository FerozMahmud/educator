import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {

    return (
        <div className='errorStyle text-center'>
            <h1><strong>404</strong></h1>
            <h2>Oops! The page you are looking for can't be found!</h2>
            <Link className='back-link' to="/home">Back To Home</Link>
        </div>
    );
};

export default Error;