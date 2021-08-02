import React from "react";

const Notification = ({message}) => {
	if (message[0] === null) {
		return null
	}

	//Positive feedback styles
	const positiveNotificationStyle = {
		backgroundColor: "LightGray",
		width: "20vw",
		height: "5vh",
		border: "5px solid green",
		borderRadius: "20px",
		margin: "10px",
		textAlign: "center",
		alignItems: "center"
	}

	//Negative feedback styles, i'm too lazy to use spread operator and only change what changes xd
	const negativeNotificationStyle = {
		backgroundColor: "LightGray",
		width: "20vw",
		height: "5vh",
		border: "5px solid red",
		borderRadius: "20px",
		margin: "10px",
		textAlign: "center",
		alignItems: "center"
	}

	//Defining palceholder for styles
	let notificationStyle = {}

	//Picking styles, based on feedback 
	if (message[0] === "pos") {
		notificationStyle = positiveNotificationStyle
	} else if (message[0] === "neg") {
		notificationStyle = negativeNotificationStyle
	}

  return (
		<div style={notificationStyle}>
			{message[1]}
		</div>
	)
};

export default Notification;
