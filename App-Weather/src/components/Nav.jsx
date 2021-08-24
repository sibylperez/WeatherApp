import React from 'react';
import Logo from '../utils/Logo.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

export default function Nav({onSearch}) {
return (
<nav className="navbar navbar-light">
  <div className="container">
      <img src={Logo} alt="Imag not found" width="30" height="24" />
      <span>Weather App</span>
      <SearchBar onSearch={onSearch}/>
  </div>
</nav>
)};
