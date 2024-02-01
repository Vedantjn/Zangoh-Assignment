import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo';
import Left from './components/Left';
import Nav from './components/Nav';
import Right from './components/Right';
import styled from 'styled-components';

const items = [
  {
    imageUrl: './images/Dog1.png',
    caption: 'Dog 1'
  },
  {
    imageUrl: './images/Dog2.png',
    caption: 'Dog 2'
  }
];

function App() {
  return (
    <AppContainer className="App">
      <Logo/>
      <Left/>
      <Nav/>
      {/* <Right items={items}/> */}
      <Right/>
    </AppContainer>
  );
}

export default App;


const AppContainer = styled.div`
  background-color: #FDE3D9
  height: 100vh;  
  overflow: hidden;
  width : 100vw;
`;
