import { React } from 'react'
import { ItemC, ItemHeader,ItemImage, ItemPrice, ItemShortInfo, ItemStockInfo  } from "../styles/Item.style";




function Item({gaseosa}) {

  const {id, title, price, pictureURL, itemInfo, itemStock} = gaseosa;
  
  
const image = require("../assets/" + pictureURL +".jpg");

  return (
    <div>
        <ItemC>
         <ItemHeader>{title}</ItemHeader>
         <ItemImage><img width="50%" src={image} /></ItemImage>
         <ItemPrice>Precio {price}</ItemPrice>
         <ItemShortInfo>{itemInfo}</ItemShortInfo>
         <ItemStockInfo>Stock: {itemStock}</ItemStockInfo>
        </ItemC>
    </div>
  )
}

export default Item