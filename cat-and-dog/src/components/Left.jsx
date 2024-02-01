import React from 'react';
import styled from "styled-components";

const Left = () => {
  return (
    <LeftContainer>
      <p className='main-heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <p className='second-heading'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <img className='app-store' src={require('../images/AppStoreBadge.png')} alt="Apple Store Badge" />
      <img className='google-play' src={require('../images/google-play-badge.png')} alt="Google Play Badge" />
    </LeftContainer>
  );
};

export default Left;

const LeftContainer = styled.div`

    width : 50%;
    height : 100vh;

    background-color : #FDE3D9;

  .google-play{
    top: 793px;
    left: 232px;
    width: 207px;
    height: 80px;
    cursor : pointer;
    position : absolute;
    
  }

  .app-store{
    cursor : pointer;
    top: 806px;
    left: 60px;
    width: 160px;
    height: 53px;
    position : absolute;
    
  }

  .main-heading {
    letter-spacing: 2px;  
    line-height: 1.5;    
    position: absolute;
    top: 359px;
    left: 60px;
    width: 571px;
    height: 162px;
    letter-spacing: 0;
    text-align: left;
    color: #3E3E3E;
    opacity: 1;
    font-size: 42px;

  }

  .second-heading {
    position: absolute;
    top: 600px;
    left: 60px;
    width: 440px;
    height: 108px;
    letter-spacing: -0.11px;
    text-align: left;
    color: #6D6D6D;
    opacity: 1;
    font-size: 16px;
    margin-top : 21x;
    
  }

  img {
    ${'' /* max-width: 100%;  */}
  }
`;
