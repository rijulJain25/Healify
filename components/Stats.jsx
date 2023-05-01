import React from 'react';
import { Tab } from 'bootstrap';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Stats = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Wrapper>
            <section className="service" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="service-bx wow zoomIn">
                                <h2>Mental Health around the world</h2>
                                <Row size={12} sm={12} md={4} className="stress-row">
                                    <div className="proj-txtx">
                                        <h4>World(%)</h4>
                                        <h5>63%</h5>
                                        <span>of employees are stressed</span>
                                    </div>
                                    <div className="proj-txtx">
                                        <h4>India(%)</h4>
                                        <h5>70%</h5>
                                        <span>of employees are stressed</span>
                                    </div>
                                    <div className="proj-txtx">
                                        <h4>IT Sector(%)</h4>
                                        <h5>50%</h5>
                                        <span>of employees are stressed</span>
                                    </div>
                                    <div className="proj-txtx">
                                        <h4>Health(%)</h4>
                                        <h5>47%</h5>
                                        <span>of employees are stressed</span>
                                    </div>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
};

const Wrapper = styled.section`

     background: rgb(233, 247, 247);;
    .service {
        margin-top: 3rem;
        background-color: rgb(233, 247, 247);
        padding: 0 0 50px 0;
        position: relative; 
        z-index: 1;
    }

.service-bx {
  background: linear-gradient(90.21deg, #1585c5 -5.91%, #1f22c7 111.58%);
  border-radius: 64px;
  text-align: center;
  padding: 60px 50px;
  margin-top: -55px;
  margin-bottom: -70px;
  box-shadow: 2px 2px 22px 1px grey; 
}
.service h2 {
	font-size: 40px;
	font-weight: 700;
    color: white;
    padding-bottom: 2rem;
}
.service p {
    color: #B8B8B8;
    font-size: 18px;
    letter-spacing: 0.8px;
    line-height: 1.5em;
    margin: 14px 0 75px 0;
}

.stress-row{
    padding-top: 5rem;
}

.proj-txtx{
    color:white;
}

h4{
    color:white;
}

h5{
    font-size: 27px;
}

@media (max-width: 970px){
    .proj-txtx{
        h4{
            font-size: 20px
        }
        h5{
            font-size: 16px;
        }
    }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
    .proj-txtx{
        h4{
            padding-top: 25px;
            font-size: 30px
        }
        h5{
            font-size: 25px;
        }
    }

    .service-bx {
        padding: 60px 30px;
        margin: 0 2rem;
    }
}
    
`;

export default Stats;
