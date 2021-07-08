import React, { useState } from 'react'


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const DisplayStatistic = (props) => {
  let sum = props.good + props.neutral + props.bad
  if (sum === 0) {
    return(
      <div>
        <h1>Statistic</h1>
        <p>We will show you statistic, after first feedback!</p>
      </div>
    )
  }
  return (
      <div>
        <h1>Statistic</h1>
        <Statistic text='Good' value={props.good}/>
        <Statistic text='Neutral' value={props.neutral}/>
        <Statistic text='Bad' value={props.bad}/>
        <Statistic text='All' value={props.sum}/>
        <Statistic text='Average' value={(props.good * 1 + props.neutral * 0 + props.bad * -1) / sum}/>
        <Statistic text='Positive' value={Math.round(props.good / sum * 100)  + '%'}/>
      </div>
  )
}

const Statistic = ({text, value}) => {
  return (
    <p>
      {text}: {value}
    </p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood = (props) => (setGood(good + 1))
  const updateNeutral = (props) => (setNeutral(neutral +1))
  const updateBad = (props) => (setBad(bad +1))

  return (
    <div>
      <Button handleClick={() => updateGood()} text='Good'/>
      <Button handleClick={() => updateNeutral()} text='Neutral'/>
      <Button handleClick={() => updateBad()} text='Bad'/>
      <DisplayStatistic good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App