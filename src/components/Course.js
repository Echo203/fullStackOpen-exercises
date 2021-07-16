import React from 'react'

const Part = ({name, numOfExc}) => {
	console.log('name :>> ', name);
	console.log('numOfExc :>> ', numOfExc);
  return (
    <li>
      {name} {numOfExc}
    </li>
  )
}

const Sum = ({parts}) => {
	return (<p>
		Total ammount of {parts.reduce((sum, part) => sum += part.exercises, 0)} excercises.
		</p>
	)
}

const Course = (props) => {
	console.log('props :>> ', props);


  return (
    <div>
      <h1>{props.course.name}</h1>
			<ul>
				{props.course.parts.map((part) => <Part name={part.name} numOfExc={part.exercises}
				key={part.id}/>)}
			</ul>
			<Sum parts={props.course.parts} />
    </div>
  )
}

export default Course