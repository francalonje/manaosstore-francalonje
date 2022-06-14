import React from 'react'
import ItemCounter from "./ItemCounter"
import { ItemDetailC,   ItemDetailCC, ItemDetailCenterC, ItemDetailLeftC, ItemDetailRightC, ItemDetailImage, ItemDetailTitle, ItemDetailDescription, ItemDetailPrice, ItemDetailStockInfo  } from "../styles/ItemDetail.style";

function ItemDetail(item) {

   // eslint-disable-next-line no-unused-vars
   const {id, title, price, pictureURL, itemInfo, stock} = item;
    
  return (
   <ItemDetailCC>
    <ItemDetailC>
       <ItemDetailLeftC>
           <ItemDetailImage><img width="50%"  src={""+ pictureURL} alt={title}/></ItemDetailImage>
        </ItemDetailLeftC>
        <ItemDetailCenterC>
           <ItemDetailTitle>{title}</ItemDetailTitle>
           <ItemDetailDescription>{itemInfo}</ItemDetailDescription>
        </ItemDetailCenterC>
        <ItemDetailRightC>
           <ItemDetailPrice>Precio: {price}</ItemDetailPrice>
           <ItemDetailStockInfo>Stock: {stock}</ItemDetailStockInfo>
           <ItemCounter stock={stock}></ItemCounter>
        </ItemDetailRightC>
    </ItemDetailC>
    </ItemDetailCC>
  )
}

export default ItemDetail