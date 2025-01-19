

import axios from 'axios';

const baseUrl='http://localhost:3001/persons';

const getNumbers=()=>{
    const req=axios.get(baseUrl);
    return req.then((res)=>res.data);
}

const create=(newPerson)=>{
    const req=axios.post('http://localhost:3001/persons',newPerson)
    return req.then((res)=>res.data)
}


const del=(id)=>{
    const req=axios.delete(`${baseUrl}/${id}`);
    return req.then((res)=>res.data)

}

const replace=(id,changedObj)=>{
    const req=axios.put(`${baseUrl}/${id}`,changedObj)
    return req.then((res)=>res.data)
}

export { create, del, getNumbers, replace };

