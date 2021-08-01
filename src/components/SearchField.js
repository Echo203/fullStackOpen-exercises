import React from "react";
import ListItem from "./ListItem";

function SearchField({ persons, search, handleDelete }) {
  const listingsToShow = search
    ? persons.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      )
    : persons;

  return (
    <div>
      {listingsToShow.map((person) => (
        <ListItem
          key={person.id}
          name={person.name}
          number={person.number}
          id={person.id}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default SearchField;
