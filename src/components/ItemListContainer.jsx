import React from 'react'
import { ItemListContainerC } from "../styles/ItemListContainer.style";
import  ItemCounter  from "../components/ItemCounter";
import  Item  from "../components/Item";


function ItemListContainer() {

  const onAdd = (counter) =>  alert(`sumaste ${counter} productos`);
  

  return (
    <div>
       <ItemListContainerC>Hola soy contenido</ItemListContainerC>
       <Item stock={5} initial={1} onAdd={onAdd}> </Item>
    </div>
 
  )
}

export default ItemListContainer