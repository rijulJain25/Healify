import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const General2 = ({name, desc, begin, img}) => {
    return (
        <Wrapper>
            <div className='container grid grid-two-column'>
                <div className='section-gen-data'>
                    <p className='gen-top-data'>{begin}</p>
                    <h1 className='gen-heading'>{name}</h1>
                    <p className='gen-para'>{desc}</p>
                </div>
                <div className='section-gen-image'>
                    <picture>
                        <img src={img} alt='Image' srcSet='' className='banner-img' />
                    </picture>
                </div>
            </div>
        </Wrapper>

    );
};

const Wrapper = styled.section`
    
    padding: 9rem 0;
    background-color: #fffff;
    background-image: url("https://www.transparenttextures.com/patterns/gplay.png");

   .grid-two-column{

       .section-gen-data {
           display: flex;
           flex-direction: column;
           justify-content: center;
        }
        .gen-top-data {
            text-transform: uppercase;
            font-weight: 500;
            font-size: 1.5rem;
            color: ${({ theme }) => theme.colors.helper};
        }
        .gen-heading {
            text-transform: uppercase;
            font-size: 6.4rem;
        }

        .gen-para {
            margin-top: 1.5rem;
            margin-bottom: 3.4rem;
            max-width: 60rem;
        }
        
        .section-gen-image{
           display: flex;
           justify-content: center;
           align-items: center;

           picture {
               text-align: center;
           } 

           .banner-img {
              animation: updown 3s linear infinite;
              max-width: 100%;
            }

            @keyframes updown {
                0% {
                    transform: translateY(-20px);
                }
                50% {
                    transform: translateY(20px);
                }
                100% {
                    transform: translateY(-20px);
                }
            }
        }
   }
   @media (max-width: ${({ theme }) => theme.media.mobile}) {
                .container {
                    gap: 7.2rem;
                    text-align:center;
                    display: flex;
                    flex-direction: column;
                }
                .section-gen-data{
                    align-items: center;
                }
            }

`;


export default General2
