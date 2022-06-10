import React from 'react'
import Item from './Item'
import { ItemListC  } from "../styles/Item.style";

function ItemList({gaseosas}) {
  return (
    <ItemListC>
        {gaseosas?.map(gaseosa => <Item /> )}
    </ItemListC>
)}

export default ItemList