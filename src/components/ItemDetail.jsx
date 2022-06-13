import React from 'react'
import ItemCounter from "src/components/ItemCounter.jsx"
import { ItemDetailC, ItemDetailCenterC, ItemDetailLeftC, ItemDetailRightC, ItemDetailImage, ItemDetailDescription, ItemDetailPrice, ItemDetailStockInfo  } from "../styles/Item.style";

function ItemDetail(item) {

   // eslint-disable-next-line no-unused-vars
   const {id, title, price, pictureURL, itemInfo, stock} = item;
    
  return (
    <ItemDetailC>
       <ItemDetailLeftC>
           <ItemDetailImage><img width="50%" src={pictureURL} alt={title}/></ItemDetailImage>
        </ItemDetailLeftC>
        <ItemDetailCenterC>
           <ItemDetailDescription>{itemInfo}</ItemDetailDescription>
        </ItemDetailCenterC>
        <ItemDetailRightC>
           <ItemDetailPrice>Precio: {price}</ItemDetailPrice>
           <ItemDetailStockInfo>Stock: {stock}</ItemDetailStockInfo>
           <ItemCounter></ItemCounter>
        </ItemDetailRightC>
    </ItemDetailC>
  )
}

export default ItemDetail