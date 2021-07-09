import React, { useState } from 'react'

const Button = (props) => (<button onClick={props.clickHandler}>{props.text}</button>)

const ShowMostUpvotedAnegdote = (props) => {
  return (
    <div>
      <h2>Most upovted anegdote</h2>
      <p>{props.data[props.idx]}</p>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0})

  const drawRandom = () => {
    let rand = Math.floor(Math.random() * 6)
    setSelected(rand)
  }

  const updatePoints = () => {
    const newPoints = {...points, [selected]:points.[selected] + 1}
    setPoints(newPoints)
  }

  console.log(selected, points)

  //find the index of most upvoted anegdote (need refactoring)
  const mostUpvotedAnegdote = (props) => {
    let indexOfMostUpvoted = 0
    for(let i = 0; i < anecdotes.length ;i++) {
      if (points[indexOfMostUpvoted] < points[i]) {
        indexOfMostUpvoted = i
      }
    }
    return indexOfMostUpvoted
  }

  return (
    <div>
      {anecdotes[selected]} 
      <br></br>
      <Button clickHandler={() => drawRandom()} text={'Draw random anegdote'}/> 
      <Button clickHandler={() => updatePoints()} text={`Anegdote has currently ${points.[selected]} upvotes`}/> 
      <ShowMostUpvotedAnegdote data={anecdotes} idx={mostUpvotedAnegdote()}/>
    </div>
  )
}

export default App