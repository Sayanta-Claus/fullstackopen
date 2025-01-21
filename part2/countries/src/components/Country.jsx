
const Country =({country,handleChange})=>{
    // const handleButtonClick=(e)=>{
    //         handleChange(e.target.id)
    // }
    return(
        <li>
            {country.name.common}
            <button value={country.name.common} onClick={handleChange}>show</button>
        </li>
    )
}

export default Country