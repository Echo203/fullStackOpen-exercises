import React, { useState } from 'react'
import ListItem from './ListItem'

function SearchField({persons, search}) {

	const listingsToShow = search
		? persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()) )
		: persons

  return (
    <div>
			
      {listingsToShow.map(person =>  <ListItem key={person.name} name={person.name} number={person.number} />)}
    </div>
	)
}

export default SearchField
