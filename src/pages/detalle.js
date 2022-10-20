import { getActiveElement } from '@testing-library/user-event/dist/utils';
import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios, * as others from 'axios';

export default function Detalle(Product) {
  const {id} = useParams()
  const [query, setQuery] = useState([])
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(function (response) {
      console.log(response.data)
      setQuery(response.data);
    })
    .catch(function (error) {
        console.log(error)
    })
  },[])

  if (query.length === 0) return <p>Cargando...</p>

    return (
      <>
      <p>{query.title}</p>
      <img src={query.images[0]}/>
      </>
    )
}