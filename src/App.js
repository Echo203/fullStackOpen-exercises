import React, { useEffect, useState } from "react";
import SearchField from "./components/SearchField";
import numberService from "./components/numberService";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchField, setSearchField] = useState("");

  //Fetch numbers list
  const fetchNumbers = () => {
    numberService.getAll().then((numbersList) => {
      setPersons(numbersList);
    });
  };
  useEffect(fetchNumbers, []);

  // Collect new Name
  const addNewName = (event) => {
    event.preventDefault();
    // Check if its already in our list
    const x = persons.find((x) => x.name === newName)
    if (x) {
      //If it is, ask if want to update the number
      const newPerson = {...x, number: newNumber}
      if (window.confirm(`Do you want to update ${x.name}'s number?`)) {
        numberService
          .update(x.id, newPerson)
          .then(x => {
            setNewName("");
            setNewNumber("");
            fetchNumbers()
          })
      }
    } else {
      //If its not, create a new person 
      const newPerson = {
          name: newName,
          number: newNumber,
          id: persons.length +1,
        }
      numberService
        .createNewNumber(newPerson)
        .then((n) => {
          setPersons(persons.concat([newPerson]));
          setNewName("");
          setNewNumber("");
      });
    }
  };

  //Store new Number
  const collectNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  //Store new Name
  const collectNewPerson = (event) => {
    setNewName(event.target.value);
  };

  //Store search field content
  const storeSearchField = (event) => {
    setSearchField(event.target.value);
  };

  //Delete button functionality
  const handleDeletingNumber = (id) => {
    numberService.removeNumber(id).then((res) => {
      console.log("res :>> ", res);
      fetchNumbers(); // Fetch numbers, no manual updating localy!
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Search bar:
        <input type="text" onChange={storeSearchField} />
      </div>
      <h2>Add new person</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input onChange={collectNewPerson} />
        </div>
        <div>
          number: <input onChange={collectNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        <SearchField
          persons={persons}
          search={searchField}
          handleDelete={handleDeletingNumber}
        />
      </ul>
    </div>
  );
};

export default App;
