


const PersonForm=(props)=>{

    return (
        <>
         <form onSubmit={props.handleSubmit}>
        <div>
          name: <input value={props.newName} onChange={props.handleChange}/>
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.handleChangeNum}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
        </>
    )
}

export default PersonForm