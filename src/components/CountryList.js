import React, {useState} from 'react'
import Country from './Country'

const CountryList = ({ countryList }) => {
  const [showDetails, setShowDetails] = useState(undefined)

  const clickHandlerForDetails = (selectedCountry) => {
    setShowDetails(selectedCountry)
  }

  if (countryList.length > 9) {
    return (
      <p>Too mane results mate</p>
    )
  } else if (countryList.length > 0) {
    return (
      <div>
        <ul>
          {countryList.map(country => (
            <li key={country.numericCode}>{country.name}{'  '}
            {<button onClick={() => clickHandlerForDetails(country)}>Show</button>}
            </li>) )}
        </ul>
        {showDetails
          ? <Country country={showDetails} />
          : null
        }
      </div>
    )
    } else {
      return(null)
    }
}

export default CountryList