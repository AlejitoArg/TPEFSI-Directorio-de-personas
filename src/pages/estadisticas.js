import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios, * as others from 'axios';


export default function TodoProductos() {
  const [query, setQuery] = useState([])
  const [productsAlreadyRequested, setProductsAlreadyRequested] = useState([])
  let navigate = useNavigate();
    const getTotProducts = () =>{
        axios.get(`https://dummyjson.com/products`)
        .then(function (response) {
          console.log(response.data.products)
          console.log(response.data.products)
        })
        .catch(function (error) {
            console.log(error)
        })
      }
   
    {query.map( 
    (Product)=>(
    <>
    <div key={Product.id} onClick={() => navigate(`/detalle/${Product.id}`)}>
    <p className="text-xl">{Product.title}</p>
    <img src={Product.images[0]}/>
    </div>
    </>
    )
    )}
}