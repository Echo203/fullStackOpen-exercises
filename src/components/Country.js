import React from 'react'

const Country = ({ country }) => {
    const languages = country.languages

  return (
    <div>
        <h2>{country.name}</h2>
        capital: {country.capital}  <br />
        population: {country.population}
        <ul>
            {languages.map(lang => <li key={lang.iso639_1}>{lang.name}</li>)}
        </ul>
        <img src={country.flag} alt="" />
    </div>
  )
}

export default Country