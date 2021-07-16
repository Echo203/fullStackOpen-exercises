import React from 'react'
import Note from './components/Note'


const App = ({notes}) => {
  const important = () => notes.map(x => <Note key={x.id} content={x.content}/>)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {important()}
      </ul>
    </div>
  )
}

export default App