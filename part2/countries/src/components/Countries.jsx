
import Country from './Country'
import CountryDetails from './CountryDetails'
const Countries=({countries,searchKey,handleChange})=>{

    if(searchKey.length>0){
        if(countries.length===1){
            return(
                <CountryDetails country={countries[0]}/>
               ) 
        }
        else if(countries.length>10){
            return (
                <p>Too many search results</p>
                )
        }
        else if(countries.length <=10){
            return (
                <>
                 <ul>
              { 
              countries.map((country)=>{
                return <Country key={country.numericCode} country={country} handleChange={handleChange}/>
              })}
              </ul>
              </>  
                )
        }
    }
   return (
    <div>
        Apply a filter
    </div>
   )
    
    
     
        
  

}

export default Countries