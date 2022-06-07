import React from 'react'
import { ItemListContainerC } from "../styles/ItemListContainer.style";
import  ItemCounter  from "../components/ItemCounter";


function ItemListContainer() {

  const onAdd = (counter) =>  alert(`sumaste ${counter} productos`);
  

  return (
    <div>
       <ItemListContainerC>Hola soy contenido</ItemListContainerC>
       <ItemCounter stock={5} initial={1} onAdd={onAdd}> </ItemCounter>
    </div>
 
  )
}

export default ItemListContainer