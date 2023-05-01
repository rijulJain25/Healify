import React from 'react';
import styled from 'styled-components';


const StressDetection = () => {
  
  return (
    <div>
      <Wrapper>
            <div className='container grid grid-two-column'>
                <div className='section-gen-data'>
                    <h1 className='gen-heading'>Stress Detection Service</h1>
                    <p className='gen-para'>Predict your stress level by taking, Sleeping Hours, Blood Pressure Rate, Respiration Rate and Maximum Heart Rate as input.</p>
                    <button className='detect'> <a href='https://adityarags-stress-detector-main-a6wayu.streamlit.app/'>Detection Test</a></button>
                </div>
                <div className='section-gen-image'>
                    <picture>
                        <img src='/images/stressdect.webp' alt='Image' srcSet='' className='banner-img' />
                    </picture>
                </div>
            </div>
        </Wrapper>

    </div>
  )
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

 .detect{
   border: 1px purple;
   width: 185px;
   height: 70px;
  background-image: linear-gradient(90.21deg, #1585c5 -5.91%, #1f22c7 111.58%);
   &:hover,
   &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }

  a{
      color: white;
      font-size: 20px;
    }
 }
`;


export default StressDetection
