import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
//import { ItemListContainerC  } from "../styles/Item.style";
import Loading from './Loading';

function ItemListContainer() {
  const [arrayGaseosas, setArrayGaseosas] = useState([])

  const [loading, setLoading] = useState(false)

  
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      fetch("gaseosas.json")
        .then(res => res.json())
        .then(json => setArrayGaseosas(json))
        .catch(err => console.error("Error al importar gaseosas.json:", err))
        .finally(setLoading(false))
    }, 2000)
  }, [])

  if(loading){
    return (
      <Loading />
    )
  } else {
    return (
      <>
     
        <ItemList arrayGaseosas={arrayGaseosas} />
      </>
    )
  }
}//ItemListContainerC

export default ItemListContainer