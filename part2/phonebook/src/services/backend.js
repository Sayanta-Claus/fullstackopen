

import axios from 'axios';

const baseUrl='/api/persons';

const getNumbers=()=>{
    const req=axios.get(baseUrl);
    return req.then((res)=>res.data);
}

const create=(newPerson)=>{
    const req=axios.post(baseUrl,newPerson)
    return req.then((res)=>res.data).catch(err=>{
        throw err.response.data;
    })
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

