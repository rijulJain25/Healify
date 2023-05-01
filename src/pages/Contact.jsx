import { TextareaAutosize } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
padding: 8rem 0 5rem 0;

h2{
  font-weight: 900;
  margin-bottom: 3rem;
}

.container{
  margin-top: 6rem;
  text-align:center;
  display: flex;
  
  .contact-form{
    width: 50rem;
    margin: auto;

    .contact-input{
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .contact-img{
    display: none;
  }
}


`;

const Contact = () => {
  return (
    <Wrapper>
      <div>
      <h2>Feel free to contact us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5365022580263!2d76.84872097507763!3d23.077448314278488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVellore%20Institute%20of%20Technology%20-%20VIT%20Bhopal!5e0!3m2!1sen!2sin!4v1672219835826!5m2!1sen!2sin" 
      width="100%" height="450" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className='container'>
        <div className='contact-img'>
          <img src='/images/contact.png' />
        </div>
        <div className='contact-form'>
          <form action='https://formspree.io/f/mzbqpqrq' method='POST' className='contact-input'>
            <input placeholder='Name' type="text" name='name' autoComplete='off' required />
            <input placeholder='Email' type="email" name='email' autoComplete='off' required />
            <textarea name="message" cols='30' rows='6' autoComplete='off' required></textarea>
            <input type='submit' value= 'Send' />
          </form>
        </div>
      </div>
    </div>
    </Wrapper>
  )
};


export default Contact
