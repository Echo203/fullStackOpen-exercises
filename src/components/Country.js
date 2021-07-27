import React from "react";
import Weather from "./Weather";

const Country = ({ country }) => {
  const languages = country.languages;

  return (
    <div>
      <h2>{country.name}</h2>
      capital: {country.capital} <br />
      population: {country.population}
      <ul>
        {languages.map((lang) => (
          <li key={lang.iso639_1}>{lang.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="" />
			<h2>Weather in {country.capital}</h2>
			<Weather city={country.capital}/>
    </div>
  );
};

export default Country;
