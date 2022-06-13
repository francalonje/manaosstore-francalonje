import React from 'react'
import Item from './Item'
import { ItemListC  } from "../styles/Item.style";

function ItemList({arrayGaseosas}) {

  
  return (
    <ItemListC>
        {arrayGaseosas?.map(gaseosa => <Item key={gaseosa.id} gaseosa={gaseosa}/>)}
    </ItemListC>
  )
}

export default ItemList