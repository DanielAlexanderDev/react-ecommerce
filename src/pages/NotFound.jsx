import React from 'react';
import '../styles/NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='Not-Found'>
      <div className='error-message'>
        <h1>SORRY!</h1>
        <h2>Page Not Found</h2>
        <Link to={"/"}>
          <button>Take Me Home
          </button>
        </Link>
      </div>
      <div className="container">
        <h2 className="tached">200</h2>
        <h1 className='hero'>404</h1>
        <h2 className="tached">500</h2>
      </div>
    </div>
  );
};

export default NotFound;
