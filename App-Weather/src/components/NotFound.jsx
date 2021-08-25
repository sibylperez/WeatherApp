import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'


export default function NotFound() {
    return (
      <div>
        <div className="aboutContainer">
        <div className="aboutCard">
        <Link to="/">
        <div id="closeIcon" className="row">
        <button className="xbutton">X</button>
        </div>
        </Link>
          <h2>Not Found</h2>
          <p >Ciudad <strong>No Encontrada</strong></p>
        </div>
      </div>
      </div>
    );
  };