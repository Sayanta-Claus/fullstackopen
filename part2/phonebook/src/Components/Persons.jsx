
const Persons=({personsFiltered})=>{
    return( <>
            <ul>
      {
        personsFiltered.map((person)=>{
          return <li key={person.id}>{person.name} {person.number} </li>
        })
      }
      </ul>
    </>
    )
}

export default Persons;

