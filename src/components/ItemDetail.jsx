import React from 'react'
import { ItemDetailC, ItemDetailTitle, ItemDetailDescription  } from "../styles/Item.style";

function ItemDetail() {
  return (
    <ItemDetailC>
        <ItemDetailTitle>
            Titulo
        </ItemDetailTitle>
        <ItemDetailDescription> 
            Descripcion Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi id, animi, aperiam odit nam nulla eius commodi tempora dolorum numquam dolor qui laborum, natus maxime repellat accusamus. Voluptates, veniam labore?
        </ItemDetailDescription>
    </ItemDetailC>
  )
}

export default ItemDetail