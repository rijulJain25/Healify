import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components';

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/" className='name'>
        <img src='/images/Logo.png' alt='LOGO' className='logo'/>
        <h4 className='name2'>Healify</h4>
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};


const MainHeader = styled.header`
  padding: 0 10rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .name{
    display: flex;
    align-items: center;
    gap: 2rem;
    text-decoration: none;

  }

  .logo{
    height: auto;
    max-width: 50px;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}){
    padding: 0 4rem;
  }
`;

export default Header
