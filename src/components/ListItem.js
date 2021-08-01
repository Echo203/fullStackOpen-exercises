import React from "react";
import DeleteButton from "./DeleteButton";

function ListItem({ name, number, id, handleDelete }) {
  return (
    <li>
      {name}: {number}&nbsp;
      <DeleteButton
        name={name}
        id={id}
        handleDelete={handleDelete}
      />
    </li>
  );
}

export default ListItem;
