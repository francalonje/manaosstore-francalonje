import React from 'react'
import { ItemListContainerC } from "../styles/ItemListContainer.style";
import  ItemCounter  from "../components/ItemCounter";

function ItemListContainer() {
  return (
    <div>
       <ItemListContainerC>Hola soy contenido</ItemListContainerC>
       <ItemCounter> </ItemCounter>
    </div>
 
  )
}

export default ItemListContainer