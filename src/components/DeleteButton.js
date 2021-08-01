import React from "react";

const DeleteButton = ({ name, id, handleDelete }) => {

	const confirmDelete = () => window.confirm(`Are you sure you want to delete ${name}'s number`) ? handleDelete(id) : 'x'

  return (
	<button onClick={() => confirmDelete()}>
		Delete the number
	</button>
	)
};

export default DeleteButton;
