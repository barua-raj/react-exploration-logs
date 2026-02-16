import React from 'react';
import './Country.css';
const Country = ({country}) => {
    // console.log(country.flags.flags.png);
    
    const handleVisited = () => {
        console.log("Clicked");
        
    }

    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}></img>
            <h3>Name: {country.name.common}</h3>
            <h4>Region: {country.region.region}</h4>
            <h4>Capital: {country.capital.capital}</h4>
            <h4>Area: {country.area.area} {country.area.area > 300000 ? "[Big Country]" : "[Small Country]"}</h4>
            <h4>Population: {country.population.population}</h4>
            <button onClick={handleVisited}>Not Visited Yet</button>
        </div>
    );
};

export default Country;