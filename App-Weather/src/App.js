import React, {useState} from 'react';
import Nav from './components/Nav'
import Cards from './components/Cards'
import City from './components/City.jsx';
import NotFound from './components/NotFound.jsx';
import { Route, Switch } from 'react-router-dom';
import './App.css';

export default function App() {
  const [cities, setCities] = useState([]);

function onSearch(ciudad) {
  //Llamado a la API
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
    .then(r => r.json())
    .then((recurso) => {
      if(recurso.main !== undefined){
        const ciudad = {
          min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            country: recurso.sys.country,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
      };
      setCities(oldCities => {
        let checkIfExistCity = oldCities.findIndex(i => i.id === ciudad.id);
          return checkIfExistCity > -1 ? [...oldCities] : [...oldCities, ciudad]
      });
  }else {
    alert("Ciudad no encontrada");
    }
  });
}

function onClose(id) {
  setCities(oldCities => oldCities.filter(c => c.id !== id));
}

function onFilter(ciudadId) {
  let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
  if(ciudad.length > 0) {
      return ciudad[0];
  } else {
      return null;
  }
}


return (
  <div className="App">
    <Route path='/' render={() => <Nav onSearch={onSearch} />}/>
    <Switch>
    <Route exact path='/ciudad/:ciudadId' render={({match}) => <City city={onFilter(match.params.ciudadId)} />}/>
    <Route path="/" exact render={() =>  <Cards cities={cities} onClose={onClose} />} />
    <Route component={NotFound} />
    </Switch>
  </div>
)};
