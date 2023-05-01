import React from 'react'
import { NavLink } from 'react-bootstrap';
import styled from 'styled-components';
import { Button } from '../styles/Button';

const Error = () => {
  return (
    <Wrapper>
      <img className='img-err' src='/images/error.webp' />
      <NavLink to="/">
        <Button className="btn"> Go Back</Button>
      </NavLink>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
  .img-err{
    width: 100%;
  height: auto;
  }
 
  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;

export default Error
