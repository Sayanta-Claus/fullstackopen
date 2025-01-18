import { useState } from 'react'
import Filter from './Components/Filter'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '040-1234567',id:1
     },
     { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
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
  const [searchKey,setSearchKey]=useState('')

  const handleSearch=(e)=>{
    setSearchKey(e.target.value)
  }
  const personsFiltered= searchKey===''? persons:persons.filter((person)=>person.name.toLowerCase().includes(searchKey.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchKey={searchKey} handleSearch={handleSearch}/>
      <div>
        <h2>Add a new</h2>
      </div>
      <PersonForm newName={newName} newNumber={newNumber} handleChange={handleChange} handleChangeNum={handleChangeNum} handleSubmit={handleSubmit}/>
      <h3>Numbers</h3>
      <Persons personsFiltered={personsFiltered}/>
      
      
    </div>
  )
}

export default App