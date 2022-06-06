import {React, useState } from 'react'
import { ItemCounterC, ItemText, ItemImage, ItemCounterCounter, ItemPop, ItemNumber, ItemAdd  } from "../styles/ItemCounter.style";

function ItemCounter({stock, initial, onAdd}) {

    const [counter, setCounter] = useState(initial ? initial : 0);
   
    //increase counter
    const increase = () => {
      counter < stock ?  setCounter(count => count + 1) : alert('No se puede agregar');
    ;
    };
   
    //decrease counter
    const decrease = () => {
      counter > 0 ? setCounter(count => count - 1): alert('No hay mas productos por eliminar');
    };
   
    //reset counter 
    const reset = () =>{
      setCounter(0)
    };
   


  return (
    <div>
        <ItemCounterC>
              <ItemText>   item  </ItemText>
              <ItemImage></ItemImage>
              <ItemCounterCounter>
                  <ItemPop onClick={ decrease}>-</ItemPop><ItemNumber>{counter}</ItemNumber><ItemAdd onClick={increase}>+</ItemAdd>
              </ItemCounterCounter>
              <button onClick={onAdd}> Agregar al carrito </button>
        </ItemCounterC>
       
    </div>
  )
}

export default ItemCounter