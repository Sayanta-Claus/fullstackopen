import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567'
     }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber]=useState('')
  
  const handleChange=(e)=>{
    // console.log(e.target.value)
    setNewName(e.target.value)
  }
  const handleChangeNum=(e)=>{
    setNewNumber(e.target.value)
  }

  const handleSubmit=(e)=>{
    // console.log('hello')
    e.preventDefault();
    const newPerson={
      name:newName,
      number:newNumber
    }
    let f=0;
    for(let i=0;i<persons.length;i++){
      if(JSON.stringify(persons[i])===JSON.stringify(newPerson)){
        alert(`${newPerson.name} is already added to phonebook`)
        f=1;
        break;
      }
    }
    if(f==0){
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
    
    
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleChangeNum}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {
        persons.map((person)=>{
          return <li key={person.name}>{person.name} {person.number} </li>
        })
      }
      </ul>
      
    </div>
  )
}

export default App