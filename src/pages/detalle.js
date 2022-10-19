import { getActiveElement } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { useParams } from 'react-router-dom';

export default function Detalle(Products) {
  console.log(Products)
  const { id } = useParams();
  let itemSelected = Products.find(Product => Product.id === id)
  
  return (
    <>
      <p>{itemSelected.title}</p>
      <img src={itemSelected.images[0]}/>      
    </>
  )
}