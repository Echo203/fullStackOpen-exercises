import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'
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
    // Update shown country list
    setCountriesToShow(tempCountries)
  }

  return (
    <div>
      <h1>Countries</h1>
      <form>
        <input onChange={handleCountrySearch}/>
      </form> 
      {countriesToShow.length === 1
        ? <Country country={countriesToShow[0]} />
        : <CountryList countryList={countriesToShow}/>
      }
    </div>
  )
}

export default App