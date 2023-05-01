import React from 'react'
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import ServiceCard from './ServiceCard';
import styled from 'styled-components';

const Service = () => {
  const projects = [
    {
      title: "Analysis",
      description: "Pictorial/Graphical representation of various stress related data which include types of stress, reasons for stress, subreddit posts versus the social karma points, etc.",
      imgUrl: '/images/analysis.webp',
      link: "/service/analysis"
    },
    {
      title: "Stress Detection",
      description: "Predict your stress level by taking, Sleeping Hours, Blood Pressure Rate, Respiration Rate and Maximum Heart Rate as input.",
      imgUrl: '/images/stress.jpeg',
      link: "/service/stressdetection"
    },
    {
      title: "Mind Refreshing Games",
      description: "Intresting game which can work as a refresher during stress and ultimalty can improves mental health.",
      imgUrl: '/images/games.jpeg',
      link: "/service/game"
    },
    {
      title: "Intresting Quizes",
      description: "A perfect way to keep my active so that you can work efficiently and stressfree.",
      imgUrl: "/images/Quiz.png",
      link: "/service/quizmusic"
    },
  ];

  return (
    <Wrapper>
      <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2>Services</h2>
                    <p>Here are the services which we provide to get better and stable mental heath condition, so that one can work more efficiently and stressfree</p>
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ServiceCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </Wrapper>
  )
};

const Wrapper = styled.section`

.project {
  padding: 80px 0;
  position: relative;
  background-color: white;

}
.project h2 {
	font-size: 45px;
	font-weight: 700;
  text-align: center;
}
.project p {
  color: black;
  opacity: 0.87;
  font-size: 18px;
  letter-spacing: 0.8px;
  line-height: 1.5em;
  margin: 14px auto 30px auto;
  text-align: center;
  width: 56%;
}

.proj-imgbx {
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 24px;
  box-shadow: 1px 1px 10px 1px grey; 

}

.imgbox{
  overflow: hidden;
  width: 100%;
  height: 300px;
}

.proj-imgbx::before {
  content: "";
  background: linear-gradient(90.21deg, #1585c5 -5.91%, #1f22c7 111.58%);
  opacity: 0.85;
  position: absolute;
  width: 100%;
  height: 0;
  transition: 0.4s ease-in-out;
}
.proj-imgbx:hover::before {
  height: 100%;
}
.proj-txtx {
  position: absolute;
  text-align: center;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 0.5s ease-in-out;
  opacity: 0;
  width: 100%;
}
.proj-imgbx:hover .proj-txtx {
  top: 50%;
  opacity: 1;
}
.proj-txtx h4 {
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1.1em;
  color: white;
}
.proj-txtx span {
  font-style: italic;
  font-weight: 400;
  font-size: 15px;
  letter-spacing: 0.8px;
  color: white;
}
.column1{
  padding: 0 2rem;
}
.proj-imgbx a{
  text-decoration: none;
  color: #ffff00;
}
`;

export default Service
