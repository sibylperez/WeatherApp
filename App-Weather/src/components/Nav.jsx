import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../utils/Logo.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

export default function Nav({onSearch}) {
return (
<nav className="navbar navbar-light">
  <div className="container">
    <Link to ='/'><img src={Logo} alt="Imag not found" width="60" height="54" /></Link>
      <span>Weather App</span>
      <SearchBar onSearch={onSearch}/>
  </div>
</nav>
)};
