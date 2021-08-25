import React from 'react';
import Card from './Card.jsx';
import './Cards.css';

export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            country={c.country}
            img={c.img}
            id={c.id}
            onClose={() => onClose(c.id)}
          /> )}
      </div>
    );
  } else {
    return(
      <div>Sin ciudades</div>
    )
  }
}
