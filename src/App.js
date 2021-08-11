import React, { useEffect, useState } from "react";
import SearchField from "./components/SearchField";
import numberService from "./components/numberService";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchField, setSearchField] = useState("");
  const [eventMessage, setEventMessage] = useState([null, ""]);

  //Fetch numbers list
  const fetchNumbers = () => {
    numberService.getAll().then((numbersList) => {
      setPersons(numbersList);
    });
  };
  useEffect(fetchNumbers, []);

  // Add new name to the book
  const addNewName = (event) => {
    event.preventDefault();
    // Check if its already in our list
    const x = persons.find((x) => x.name === newName);
    if (x) {
      //If it is, ask if want to update the number
      const newPerson = { ...x, number: newNumber };
      if (window.confirm(`Do you want to update ${x.name}'s number?`)) {
        numberService.update(x.id, newPerson).then((x) => {
          setNewName("");
          setNewNumber("");
          fetchNumbers();
          setEventMessage(["pos", `${x.name}'s number changed succesfully!`]);
          setTimeout(() => {
            setEventMessage([null, ""]);
          }, 3000);
        });
      }
    } else {
      //If its not, create a new person
      const newPerson = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      numberService
        .createNewNumber(newPerson)
        .then((n) => {
          setPersons(persons.concat([newPerson]));
          setNewName("");
          setNewNumber("");
          setEventMessage(["pos", `${n.name}'s number added succesfully!`]);
          setTimeout(() => {
            setEventMessage([null, ""]);
          }, 3000);
        })
        .catch((err) => {
          setEventMessage(["neg", err.message]);
          setTimeout(() => {
            setEventMessage([null, ""]);
          }, 3000);
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
    numberService
      .removeNumber(id)
      .then((res) => {
        console.log("res :>> ", res);
        fetchNumbers(); // Fetch numbers, no manual updating localy!
      })
      .catch((err) => {
        setEventMessage(["neg", `Failed at deleting number.`]);
        setTimeout(() => {
          setEventMessage([null, ""]);
        }, 3000);
      });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={eventMessage} />
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
