import { useState } from 'react'


function App() {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood=()=>{
    setGood(good=>good+1)
  }
  const handleNeutral=()=>{
    setNeutral(neutral=>neutral+1)
  }
  const handleBad=()=>{
    setBad(bad=>bad+1)
  }


  return (
    <div>
      <Feedback/>
      <Button name="good" onClick={handleGood}/>
      <Button name="neutral" onClick={handleNeutral}/>
      <Button name="bad" onClick={handleBad}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>


    </div>
    
     
  )
}

const Statistics=(props)=>{
  if((props.good+props.bad+props.neutral)==0){
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    
    <div>
      <h1>statistics</h1>
      <table>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.good+props.neutral+props.bad}/>
      <StatisticLine text="average" value={(props.good-props.bad)/(props.good+props.neutral+props.bad)}/>
      <StatisticLine text="positive" value={((props.good)/(props.good+props.neutral+props.bad))*100}/>
      </table>
    </div>
  )
}

const StatisticLine=(props)=>{
  return(
    
      <tbody>
        <tr>
          <td>{props.text} </td>
          <td>{props.value} {props.text==="positive" ? <span>%</span> : null}</td>
        </tr>
      </tbody>
    
    
  )
}

const Feedback=()=>{
  return(
    <div>
    <h1>give feedback</h1>
    </div>
    
  )
}

const Button=(props)=>{
  return(
  <button style={{"borderRadius":"30px", "margin":"1px"}} onClick={props.onClick}>{props.name}</button>
  )
}
export default App
