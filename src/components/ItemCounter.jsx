import {React, useState } from 'react'
import { ItemCounterC, ItemText, ItemImage, ItemCounterCounter, ItemPop, ItemNumber, ItemAdd  } from "../styles/ItemCounter.style";

function ItemCounter() {

    const [counter, setCounter] = useState(0);
   
    //increase counter
    const increase = () => {
      setCounter(count => count + 1);
    };
   
    //decrease counter
    const decrease = () => {
      setCounter(count => count - 1);
    };
   
    //reset counter 
    const reset = () =>{
      setCounter(0)
    }
   


  return (
    <div>
        <ItemCounterC>
              <ItemText>   item  </ItemText>
              <ItemImage></ItemImage>
              <ItemCounterCounter>
                  <ItemPop onClick={ decrease}>-</ItemPop><ItemNumber>{counter}</ItemNumber><ItemAdd onClick={increase}>+</ItemAdd>
              </ItemCounterCounter>
        </ItemCounterC>
       
    </div>
  )
}

export default ItemCounter