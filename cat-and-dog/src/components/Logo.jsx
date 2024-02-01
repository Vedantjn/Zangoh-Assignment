import React from 'react'
import styled from "styled-components";


const Logo = () => {
  return (
    <LogoContainer>
        <img src= {require(`../images/logo.png`)} />
    </LogoContainer>
  )
}

export default Logo;

const LogoContainer = styled.div`
  cursor : pointer;
  margin-top: 33px;  
  margin-left: 41px;  
  padding: 0;
  width: 100px;  
  height: 100px; 
  float: left;
  z-index : 1;
`;


