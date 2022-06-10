import React from 'react'
import { ItemListContainerC } from "../styles/ItemListContainer.style";
import  ItemList  from "../components/ItemList";
import  Item  from "../components/Item";


function ItemListContainer() {

  const onAdd = (counter) =>  alert(`sumaste ${counter} productos`);
  

  return (
    <ItemListContainerC>
      <ItemList >
     
      </ItemList>
      <Item stock={5} initial={1} > </Item>
    </ItemListContainerC>
    
 
  )
}

export default ItemListContainer