import styled from "styled-components";


export const ItemDetailCC = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
text-align: center;
width: 100%;

`;

export const ItemDetailC = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
text-align: center;
border: 1px solid;
width: 50%;

`;

export const ItemDetailCenterC = styled.div`
display: flex;
flex-direction: column;
padding: 8px;
flex-wrap: wrap;
width: 30%;
background-color: white;
`;

export const ItemDetailLeftC = styled.div`
display: flex;
background-color: white;
justify-content: center;
text-align: center;

`;

export const ItemDetailRightC = styled.div`
display: flex;
flex-direction: column;
justify-content: right;
text-align: right;
background-color: #FFEFEF;
padding: 5px;
`;

export const ItemDetailImage = styled.div`
display: flex; 
justify-content: center;
text-align: center;
`;


export const ItemDetailTitle = styled.div`
display: flex;
padding: 8px;
text-align: left;
text-weight: bold;
font-size: 16px;
font-weight: bold;
`;

export const ItemDetailDescription = styled.div`
display: flex;
padding: 8px;
flex-wrap: wrap;
text-align: left;
font-size: 12px;
`;


export const ItemDetailPrice = styled.div`
display: flex;
justify-content: left;
text-align: right;
padding: 8px;
`;

export const ItemDetailStockInfo = styled.div`
display: flex;
justify-content: left;
text-align: right;
padding: 8px;
`;