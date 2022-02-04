import { Link, Button } from 'gatsby';
import React from 'react';
import '../components/home.css';
import styled from 'styled-components';

export default function HomeNav() {
  //TODO: Make Mobile Nav
  if (window.innerWidth < 760){
    console.log("HI")
    return (
    <h1>hi</h1>
  );
  } else {
  return <StyledDiv>
        <StyleLink href="./">home</StyleLink>
        <NextStyleLink href="/howtofindus">How to Find Us</NextStyleLink>
        <StyleLink href="/podcast">Podcast</StyleLink>
        <NextStyleLink href="/fan-art">Fan Art</NextStyleLink>
        <StyleLink href="/recaps">Recaps</StyleLink>
        <NextStyleLink href="/character-sheets">Character Sheets</NextStyleLink>
    </StyledDiv>;
  }          

}
const StyleLink = styled(Link)`
font-family: 'Libre Franklin', sans-serif;
  text-decoration:none;
  color:white;
  &:hover {
    color:orange;
  }
`;

const NextStyleLink = styled(Link)`
font-family: 'Libre Franklin', sans-serif;
text-decoration:none;
color:#E01073;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: white;
&:hover {
  -webkit-text-stroke-width: .5px;
  -webkit-text-stroke-color: orange;
};
`
const StyledDiv = styled.div`
  display:flex; 
  justify-content: space-between;
  padding:1em; 
  padding-left: 4em; 
  padding-right: 4em;
  background-color:#E01073;
  color:"white";
`