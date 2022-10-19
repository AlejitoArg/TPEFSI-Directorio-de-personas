import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { ActionTypes, useContextState } from "../contextState";
import axios, * as others from 'axios';


export default function Home() {
  const [query, setQuery] = useState([])
  const [productsAlreadyRequested, setProductsAlreadyRequested] = useState([])
  const { contextState, setContextState } = useContextState();
  let productsAmmount=6;
  let navigate = useNavigate();

  /*const pedirDatosProducto = (idProduct)=>{
    let ghostList=query
    axios.get(`https://dummyjson.com/products/${idProduct}`)
    .then(function (response) {
      ghostList.push(response.data)
    })
    .catch(function (error) {
        console.log(error)
    })
    .then(function () {
      console.log(ghostList)
      setQuery(ghostList);
    })
  }

  const checkProductsAlreadyRequested = (number) =>{
    for(let product of productsAlreadyRequested){
      if(number==product) return true
    }
    return false
  }

  useEffect(()=>{
    console.log("")
    for(let i=0;i<productsAmmount/2;i++){
      let rand;
      do{
        rand=1+Math.floor(Math.random()*100)
      }while(checkProductsAlreadyRequested(rand))
      setProductsAlreadyRequested([...productsAlreadyRequested, rand])
      pedirDatosProducto(rand)
    }
  },[])*/

  const getFirstTwelve = () =>{
    axios.get(`https://dummyjson.com/products`)
    .then(function (response) {
      console.log(response.data.products)
      setQuery(response.data.products.filter(product => product.id<13));
      console.log(response.data.products)
    })
    .catch(function (error) {
        console.log(error)
    })
  }
  useEffect(()=>{
    getFirstTwelve()
  },[])

  const verDetalle = (producto) =>{
    setContextState({
      type: ActionTypes.SetProductoSeleccionado,
      value: producto
    })
    navigate(`/detalle/`)
  }

  return (
    <>
    {/*<div className="w-screen grid place-content-center mt-24">
        <input className="w-[300px] text-center mb-5" placeholder="Ingrese el nombre de la query" onChange={event => setQuery(event.target.value)} />
          <div className='grid grid-cols-4'>
            {
        query.filter(query => {
          if (query === '') {
            return query;
          } else if (query.nombre.toLowerCase().includes(query.toLowerCase())) {
            return query;
          }
        }).map((query) => (
          <div  key={query.id} onClick={() => navigate(`/detalle/${query.id}`)}>
            <div className='fit text-center'>{query.nombre}</div>
          </div>
          ))
        }
        </div>
      </div>*/}
      {query.map( 
        (Product)=>(
          <>
            <div key={Product.id} onClick={verDetalle(Product.id)}>
            <p>{Product.title}</p>
            <img src={Product.images[0]}/>
            </div>
          </>
        )
      )}
    </>
  )
}
