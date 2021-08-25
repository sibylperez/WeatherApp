import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id, country}) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="xbutton">X</button>
        </div>
        <div className="card-body">
        <Link to={`/ciudad/${id}`}>
          <h5 className="card-title">{name}, {country}</h5>
        </Link>
          <div className="row divcontainer">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p className="min">Min ↓</p>
              <p>{min}°C</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p className="max">Max ↑</p>
              <p>{max}°C</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};