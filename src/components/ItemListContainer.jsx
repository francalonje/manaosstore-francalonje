import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";


export default function ItemListContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [resultado, setResultado] = useState([]);


  useEffect(() => {
    const mandaGaseosas = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          {id: "1", title: "MANAOS UVA", price : "2300", itemStock: "4", itemInfo: "la mas rica", pictureURL: 'MANAOS-COLA-1,25LTS'},
          {id: "2", title: "MANAOS LIMON", price: "2100", itemStock: "10", itemInfo: "la mas fresca", pictureURL: 'MANAOS-COLA-1,25LTS'},
          {id: "3", title: "MANAOS LINEA PECSI", price: "3300", itemStock: "7", itemInfo: "la mas artificial", pictureURL: 'MANAOS-COLA-1,25LTS'},
          {id: "4", title: "MANAOS AñEJA 12 AñOS",price: "1800",itemStock: "3", itemInfo: "la mas sabrosa", pictureURL: 'MANAOS-COLA-1,25LTS'},
          {id: "5", title: "MANAOS IMPORTADA DE LA REPUBLICA DEMOCRATICA DEL CONGO", price: "2200", itemStock: "5", itemInfo: "la mas rica",  pictureURL: 'MANAOS-COLA-1,25LTS'},
          {id: "6", title: "MANAOS ULTIMATE", price: "2500", itemStock: "2", itemInfo: "la mas rica", pictureURL: 'MANAOS-COLA-1,25LTS'}
      ]);
        
      }, 2000);
    });

    mandaGaseosas
      .then((result) => {
        setResultado(result);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Fallo intente de nuevo"}</div>
      <ItemList gaseosas={resultado} />
    </>
  );
}