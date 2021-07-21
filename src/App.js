import React, { useState } from 'react'
import ListItem from './components/ListItem'
import SearchField from './components/SearchField'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchField, setSearchField ] = useState('')


  // Collect new Name
  const addNewName = (event) => {
    event.preventDefault()
    if (persons.find(x => x.name === newName)){
      window.alert(`${newName} already exists`)
    } else {
    const newPerson = [{
      name: newName,
      number: newNumber
    }]
    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
    }
  }

  //Store new Number
  const collectNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  //Store new Name
  const collectNewPerson = (event) => {
    setNewName(event.target.value)
  }

  //Store search field content
  const storeSearchField = (event) => {
    setSearchField(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <input type="text" onChange={storeSearchField}/>
      <form onSubmit={addNewName}>
        <div>name: <input onChange={collectNewPerson}/></div>
        <div>number: <input onChange={collectNewNumber}/></div>
        <div>
        <button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <SearchField persons={persons} search={searchField} />
      </ul>
    </div>
  )
}

export default App