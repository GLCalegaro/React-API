import styled from "styled-components";
import { getCardColors } from "../service/getCardColors";
import { getColors } from "../service/getColors";

export const Card = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
width: 146px;
height: 38px;
background-color: ${props=>props.color};
border-radius: 8px;
flex: none;
order: 1;
flex-grow: 0;
`;

export const Pokeball = styled.img`
position: absolute;
width: 210.73px;
height: 210.73px;
opacity: 0.7;
margin: -138px 36.87px 15.87px -194px;

`;

export const Cardimg = styled.img`
    width: 193px;
    height: 193px;
    margin: -215px 268px 5px;
    position: relative;
`;

export const Alltypes = styled.div`
width: 95px;
display: flex;
height: 31px;
left: 23px;
top: 89px;
padding: 5px 8px;
background: ${(props) => getColors(props.color?.type.name)};
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;
margin: 119px 0px -110px 13px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #FFFFFF;
text-transform: capitalize;
float: left; 
align-items: center;
justify-content: center;
`;

export const Pokecontenttypes = styled.div`

`;

export const TypeImg = styled.img`
width: 17px;
height: 20px;
margin: 130px -38px 10px -104px;
`;

export const Typebackg = styled.img`

`;

export const Cardtypeimg = styled.img`
width: 20px;
height: 20px;
background: #F44900
`;
