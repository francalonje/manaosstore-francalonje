import React from 'react'
import ItemCounter from './ItemCounter'
import ItemDetail from './ItemDetail'
import { ItemC, ItemHeader,ItemImage  } from "../styles/Item.style";

function Item() {
  return (
    <div>
        <ItemC>
         <ItemHeader>Producto</ItemHeader>
         <ItemImage><img width="50%" src={require("../assets/MANAOS-COLA-1,25LTS.jpg")} /></ItemImage>
         <ItemDetail></ItemDetail>
         <ItemCounter></ItemCounter>
        </ItemC>
    </div>
  )
}

export default Item