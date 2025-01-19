
const Persons=({personsFiltered,handleClick})=>{
    
   
    return( <>
            <ul>
      {
        personsFiltered.map((person)=>{
          return <div key={person.id}>
            <li >{person.name} {person.number} <button id={person.id} onClick={handleClick} >delete</button> </li>
          </div>
        })
      }
      </ul>
    </> 
    )
}

export default Persons;

