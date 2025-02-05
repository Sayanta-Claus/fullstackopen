// import axios from 'axios'
import { useEffect, useState } from 'react'
import Error from './Components/Error'
import Filter from './Components/Filter'
import Notification from './Components/Notification'
import PersonForm from './Components/PersonForm'
import Persons from './Components/Persons'
import { create, del, getNumbers, replace } from './services/backend'
const App = () => {
  const [persons, setPersons] = useState([]) 
  useEffect(()=>{
    getNumbers().then((data)=>{
          setPersons(data);
    })

  },[])
  
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber]=useState('')
  const [sucMessage,setSucMessage]=useState(null)
  const [errMessage,setErrMessage]=useState(null)
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
      number:newNumber,
      
    }
    let f=0;
    for(let i=0;i<persons.length;i++){
      if((persons[i].name)===(newPerson.name)){
        if(window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one ?`)){
            replace(persons[i].id,newPerson).then((data)=>{
              setSucMessage(`Success!!! ${data.name} with ${data.number} modified`)
              setTimeout(()=>{
                setSucMessage(null)
              },4000)
              setPersons(persons.map((p)=>{
                if(p.id===data.id){
                  return data
                }
                else{
                  return p
                }
              }))
            }).catch((err)=>{
              console.log(err);
              setErrMessage(`Information about ${newPerson.name} already removed from server`);
              setTimeout(()=>{
                setErrMessage(null)
              },5000)

            })
        }
        f=1;
        break;
      }
    }

    if(f==0){
      create(newPerson).then((data)=>{
        setSucMessage(`Success!!! ${data.name} with ${data.number} added`)
              setTimeout(()=>{
                setSucMessage(null)
              },4000)
        const addedPerson=data;
        setPersons(persons.concat(addedPerson))
      }).catch((error)=>{
        console.log(error);
        setErrMessage(error.error)
        setTimeout(()=>{
          setErrMessage(null)
        },4000)
      })
      
    }
    setNewName('')
      setNewNumber('') 
    
    
  }
  const [searchKey,setSearchKey]=useState('')

  const handleSearch=(e)=>{
    setSearchKey(e.target.value)
  }
  



  const handleClick=(e)=>{
    const person=personsFiltered.filter((p)=>p.id===e.target.id)
    const obj=person[0];
    console.log(obj)
    if(window.confirm(`Delete ${obj.name} ?`)){
      del(e.target.id).then((data)=>{
        console.log("deleted user")
        console.log(data)
        setPersons(persons=>persons.filter((p)=>Number(p.id) !== Number(obj.id)))
      }).catch((err)=>{
        console.log(err)
      })
    }
    
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
      <Persons personsFiltered={personsFiltered} handleClick={handleClick}/>
      <Notification message={sucMessage}/>
      <Error message={errMessage}/>
      
    </div>
  )
}

export default App