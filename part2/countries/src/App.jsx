import axios from 'axios';
import { useEffect, useState } from 'react';
import Countries from './components/Countries';
import Filter from './components/Filter';
// const apikey=process.env.REACT_APP_API_KEY;
function App() {
  const [countries,setCountries]=useState([]);
  const [searchKey,setSearchKey]=useState('');
  const filteredCountries= searchKey.length===0 ? countries : countries.filter((cnt)=>{
    return cnt.name.common.toLowerCase().includes(searchKey.toLowerCase());
  })
  useEffect(()=>{
    
          axios.get('https://studies.cs.helsinki.fi/restcountries/api/all').then((res)=>{
            setCountries(res.data)
          }).catch((err)=>{
            console.log(err);
          })
        
  },[])
  const handleChange=(e)=>{
            // console.log(e.target.value)
            setSearchKey(e.target.value);
  }

  

  return (
    <>
     <Filter handleChange={handleChange}/>
     <div>
         < Countries searchKey={searchKey} countries={filteredCountries} handleChange={handleChange}/>
     </div>

    </>
  )
}






export default App
