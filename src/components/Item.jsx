import { React } from 'react'
import { Link } from 'react-router-dom'
import { ItemC, ItemImage, ItemPrice, ItemStockInfo  } from "../styles/Item.style";

function Item({id, title, price, pictureURL, stock, itemInfo}) {
  

  return (
    <Link to={`/producto/${title}`}>
    <div>
        <ItemC>
         <ItemImage><img width="50%" src={"./"+ pictureURL} alt={title}/></ItemImage>
         <ItemPrice>Precio: {price}</ItemPrice>
         <ItemStockInfo>Stock: {stock}/100</ItemStockInfo>
         <button>Detalles</button>
        </ItemC>
    </div>
    </Link>
  )
}

export default Item