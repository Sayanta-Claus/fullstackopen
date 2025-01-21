// import axios from 'axios'

const CountryDetails=({country})=>{

  

    return (
      <>
        <h1>{country.name.common}</h1>
        <div>capital {country.capital}</div>
        <div>area {country.area}</div>
  
        <h3>languages</h3>
        <ul>
            {
              Object.keys(country.languages).map((lang)=>{
                return (
                  <li key={lang}>{country.languages[lang]}</li>
                )
              })
            }
        </ul>
  
        <div>
          {country.flag}
        </div>
  
      </>
    )
  
  }

  export default CountryDetails;