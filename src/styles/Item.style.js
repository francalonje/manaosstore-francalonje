import styled from "styled-components";



export const ItemC = styled.div`
  background-color: #FEC8C1;
  display: flex;
  width: 210px;
  flex-direction: column;
  border: 2px solid ;
  border-color: #686868;
  text-align: center;
  margin: 48px;
  justify-content: space-between;  
`;



export const ItemHeader = styled.p`
  display: flex;  
  background-color: #BF1A2F;
  color: #EBFEC1;
  width: 100%;
  justify-content: center;
  font-weight: bold;
  margin-top: 0px;
`;

export const ItemImage = styled.div`
  display: flex;  
  flex-direction: row;
  width: 100%;
  justify-content: center;
  font-weight: bold;

  
`;

export const ItemDetailC = styled.div`
  display: flex;  
  flex-direction: column;
  width: 100%;
  justify-content: center;
  font-weight: bold;
  margin: 4px;

  
`;

export const ItemDetailTitle = styled.div`
  text-align: left;
  font-weight: italic;
  
`;

export const ItemDetailDescription = styled.div`
  display: flex;
  font-size: 8px;
  text-align: left;

  
`;

export const ItemCounterC = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
padding: 10px 10px 4px 10px;

`;

export const ItemPop = styled.button`
background-color: red;
display: flex;
`;

export const ItemNumber = styled.b`

`;

export const ItemAdd = styled.button`
background-color: green;
display: flex;
`;


export const ItemListC = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;