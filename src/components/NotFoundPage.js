import React from 'react';
// import { Link } from 'react-router-dom';
import lostInSpace from '../images/404-astronaut.svg';

const NotFoundPage = () => (
  <div className="notFoundContainer">
    <h1 className="hero">404</h1>
    <img src={lostInSpace} alt="Lost in Space" className="hover" />
    <p className="text">Uh oh, this page seems to be lost in space...</p>
    <p className="text">
      Maybe you should go back <a href="/">home</a>
    </p>
  </div>
);

export default NotFoundPage;
