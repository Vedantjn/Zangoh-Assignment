

import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";


const Right = () => {
  const [sliderSettings] = useState({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  return (
    <RightContainer>
      <h2>Single Item</h2>
      <StyledSlider {...sliderSettings}>
        <div>
          <h3>
            <img src={require(`../images/Dog1.png`)} alt="Dog 1" />
          </h3>
        </div>
        <div>
          <h3>
            <img src={require(`../images/Dog2.png`)} alt="Dog 2" />
          </h3>
        </div>
      </StyledSlider>
    </RightContainer>
  );
};

export default Right;

const RightContainer = styled.div`
${'' /* overflow : visible; */}
  z-index : -1;
  width: 925px;
  height: 966px;
  position: absolute;
  float: right;
  background-color: black;
  right: 0;
  top: 0;
  overflow: hidden;
`;

const StyledSlider = styled(Slider)`
  height: 100%;
  width: 100%;

  .slick-list {
    height: 100%;
  }

  img {
    width: 100vh;
    height: 100vh;
    top : -107px;
    object-fit: cover;
    position : absolute;

  }

  
`;


// import React, { useState } from 'react';
// import styled from 'styled-components';
// import '../App.css';


// const Carousel = ({ items }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);    

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === items.length - 1) ? 0 : prevIndex + 1);    
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0) ? items.length - 1 : prevIndex - 1);    
//   }
//   return (
//     <div className="carousel">    
//       <button onClick={prevSlide}>{'<'} Prev</button>
//       <div className="slide">
//         <img src={items[currentIndex].imageUrl} alt={items[currentIndex].caption} />
//         <p>{items[currentIndex].caption}</p>
//       </div>
//       <button onClick={nextSlide}>Next {'>'}</button>
//     </div>
//   );
// }
// export default Carousel;

// const RightContainer = styled.div`
//   /* Add any additional styles for the container if needed */

//    z-index : -1;
//    width: 925px;
//    height: 966px;
//    position: absolute;
//    float: right;
//    background-color: black;
//    right: 0;
//    top: 0;
//    overflow: hidden;
//    background-color : black;
// `;

