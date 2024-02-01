import React, { useState } from 'react';
import styled from "styled-components";
import ContactForm from './ContactForm';  // Import the ContactForm component

const Nav = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <NavContainer>
      <NavList>
        <NavItem>About</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Careers</NavItem>
        <NavItem onClick={openForm}>Contact</NavItem>
      </NavList>

      {isFormOpen && <ContactForm onClose={closeForm} />}
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.div`
  background-color: transparent;
  position: absolute;
  top: 48px;
  right: 60px;
  padding: 20px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const NavList = styled.ul`
  size: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
`;

const NavItem = styled.li`
  color: white;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;


// import React from 'react';
// import styled from "styled-components";

// const Nav = () => {
//   return (
//     <NavContainer>
//       <NavList>
//         <NavItem>About</NavItem>
//         <NavItem>Blog</NavItem>
//         <NavItem>Careers</NavItem>
//         <NavItem>Contact</NavItem>
//       </NavList>
//     </NavContainer>
//   )
// }

// export default Nav;

// const NavContainer = styled.div`
//   background-color: transparent;
//   position: absolute;
//   ${'' /* float : right; */}
//   top: 48px;
//   right : 60px;
//   padding: 20px;
//   display: flex;
//   align-items: center;
//   z-index : 1;
// `;

// const NavList = styled.ul`
//   size : 12px;
//   list-style: none;
//   margin: 0;
//   padding: 0;
//   display: flex;
//   gap: 20px;
// `;

// const NavItem = styled.li`
//   color: white;
//   cursor: pointer;
//   &:hover {
//     text-decoration: underline;
//   }
// `;
