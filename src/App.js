import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import Country from './components/Country'

const App = (props) => {
  //All countries
  const [countries, setCountries] = useState([])
  // Searchbar results
  const [countriesToShow, setCountriesToShow] = useState([])

  // Fetch one time on render
  const countriesFetchHandler = () => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }

  useEffect(countriesFetchHandler, [])

  // Save searchbar content
  const handleCountrySearch= (event) => {

    let tempCountries = countries.filter(country => {
      return country.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    
    setCountriesToShow(tempCountries)
    console.log('countriesToShow :>> ', countriesToShow);
  }

  return (
    <div>
      <h1>Countries</h1>
      <form>
        <input onChange={handleCountrySearch}/>
      </form> 
      <ul>
        { countriesToShow.length > 9
          ? "Too mane results mate"
          :  countriesToShow.map(country => <Note key={country.numericCode} country={country} />
        )}
      </ul>
      <div>
        { countriesToShow.length ===   1
        ? <Country country={countriesToShow[0]}/>
        : <div></div>
        }
      </div>
    </div>
  )
}

export default App