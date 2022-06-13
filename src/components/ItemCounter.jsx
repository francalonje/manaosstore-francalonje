import {React, useState } from 'react'
import { ItemCounterC, ItemPop, ItemNumber, ItemAdd  } from "../styles/Item.style";

function ItemCounter({stock = 5, initial =1 , onAdd=((counter) =>  alert(`sumaste ${counter} productos`))}) {

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

    const handleAddToCart = () =>{
      stock ? onAdd(counter) : alert("NO HAY STOCK CHE PERDONA LOCURA");
    };
   


  return (
    <div>
        
              <ItemCounterC>
                  <ItemPop onClick={ decrease}>-</ItemPop><ItemNumber>{counter}</ItemNumber><ItemAdd onClick={increase}>+</ItemAdd>
                 
              </ItemCounterC>
           
              <button onClick={handleAddToCart}> Agregar al carrito </button>
    </div>
  )
}

export default ItemCounter