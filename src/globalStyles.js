import styled, {createGlobalStyle} from 'styled-components'
import {Link} from 'react-scroll'

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', 'Source Sans Pro', sans-serif;
    font-weight: 500;
}
body {
    width: 100%;
    margin: 0;
    padding: 0;
}
:root{
--swiper-theme-color: #fff;
}
;`

export const FooterCon = styled.div`
width: 100%;
margin-right: auto; 
margin-left: auto;
background: linear-gradient(-50.49deg, rgba(255, 255, 255, 0.03) 81.89%, rgba(196, 196, 196, 0.18) 100.01%);
color: #0000;
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-right: auto; 
margin-left: auto;
padding-right: 120px;
padding-left: 120px;
padding-top: 70px;
padding-bottom: 70px;
background: linear-gradient(-50.49deg, rgba(255, 255, 255, 0.03) 81.89%, rgba(196, 196, 196, 0.18) 100.01%);
backdrop-filter: blur(30px);
color: #0000;
border-radius: 25px;
    @media screen and (max-width: 1200px) {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;
    margin-right: auto; 
    margin-left: auto;
    border-radius: 0px;
    backdrop-filter: blur(0px);
  }
`;

export default GlobalStyle;

export const Button = styled(Link)`
    padding: 10px 22px;
    border-radius: 10px;
    white-space: nowrap;
    font-weight: bold;
    text-decoration: none;
    outline: none;
    border: none;
    background-color: #DA2D2D;
    box-shadow: inset 0 0 0 0 #0000;
    transition: ease-in-out 0.30s;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    &:hover{
        box-shadow: inset 150px 0 0 0 #F05454;
        transition: all 0.20s ease-out;
        color: #fff;
    }
    
`