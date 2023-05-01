import styled from 'styled-components';
import React from 'react'
import { Row } from 'react-bootstrap'
import General2 from '../components/General2';

const QuizMusic = () => {

  const data = {
    name: "Musics",
    desc: "This is also a import part of our website",
    begin: "EXPLORE MORE",
    img: '/images/about1.svg'
  };

  return (
    <div>
    <General2 {...data} />
    <Wrapper>
    {/* <section className='quiz-class'>
      <div className='container'>
      <div className='quiz-heading'>
        <h2 style={{textAlign:'left', color: 'white'}}>Exciting Quizes</h2>
        <p style={{textAlign:'left', color: 'white'}}>Playing exciting quizes keep mind healthy and active, and active ming meanse more efficiency, and more efficiency meanse less stress</p>
      </div>
      <div className='quiz-box'>
        <Row className='rows-box'>
          <div className='boxes'>
            <h4 style={{color: 'white'}}>Quiz1</h4>
            <p style={{color: 'white' , fontSize: '13px', padding: '0 10px'}}>topic name of the quiz is here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <button className='btn-chk'><a href=''>Start Quiz</a></button>
          </div>
          <div className='boxes'>
            <h4 style={{color: 'white'}}>Quiz2</h4>
            <p style={{color: 'white' , fontSize: '13px', padding: '0 10px'}}>topic name of the quiz is here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <button className='btn-chk'><a href=''>Start Quiz</a></button>
          </div>
          <div className='boxes'>
            <h4 style={{color: 'white'}}>Quiz3</h4>
            <p style={{color: 'white' , fontSize: '13px', padding: '0 10px'}}>topic name of the quiz is here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <button className='btn-chk'><a href=''>Start Quiz</a></button>
          </div>
        </Row>
      </div>
      </div>
      </section> */}

    <section className='music-class'>
      <div className='container'>
      <div className='quiz-box'>
        <Row  className='row-box'>
          <div className='boxes'>
            <h4 style={{color: 'white'}}>Music1</h4>
            <p style={{color: 'white' , fontSize: '13px', padding: '0 10px'}}>topic name of the quiz is here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <button className='btn-chk'><a href='https://urvashi16.github.io/Music-player/'>Listen</a></button>
          </div>
          <div className='boxes' style={{alignContent: 'center'}}>
            <h4 style={{color: 'white'}}>Music2</h4>
            <p style={{color: 'white' , fontSize: '13px', padding: '0 10px'}}>topic name of the quiz is here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <button className='btn-chk'><a href='https://urvashi16.github.io/Music-player/'>Listen</a></button>
          </div>
          <div className='boxes'>
            <h4 style={{color: 'white'}}>Music3</h4>
            <p style={{color: 'white', fontSize: '13px', padding: '0 10px'}}>topic name of the quiz is here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
            <button className='btn-chk' ><a href='https://urvashi16.github.io/Music-player/'>Listen</a></button>
          </div>
        </Row>
      </div>

      <div className='quiz-heading'>
        <h2 style={{textAlign:'right', color: 'white'}}>Calming Music</h2>
        <p style={{textAlign:'right', color: 'white'}}>Here are some musics which can make you feel light and calm, also can make you forget about all your stress.</p>
      </div>
      </div>
      </section>
    </Wrapper>
    </div>
  )
};

const Wrapper = styled.section`

background-image: linear-gradient(90.21deg, #1585c5 -5.91%, #1f22c7 111.58%);

.quiz-class{
  margin-bottom: 100px;
}


.container{
  display: flex;
  gap: 7rem;
}


.quiz-heading{
  width: 45%;
  padding-top: 90px;
  color: white;
  height: 250px;
  top: 0;
  position: sticky;

  h2{
    font-size: 50px;
  }
}


.quiz-box{
  width: 55%;
  background-color: white;
}

.row-box{
  margin-bottom: 20px;
  justify-content: center;
  text-align: center;
}

.music-heading{
  width: 45%;
}

.music-box{
  width: 55%;
}

.boxes{
  width: 300px;
  height: 250px;
  margin: -55px 10px 80px 10px;
  background-image: linear-gradient(90.21deg, #1585c5 -5.91%, #1f22c7 111.58%);
  border-radius: 20px;
  padding: 30px 10px 0 0;

  .btn-chk{
  color: 'white';
  border: 0px;
  padding: 10px 20px;
  text-decoration: none;
  width: 100px;
  height: 40px;
  background-image: white;
  &:hover,
  &:active {
    transform: scale(0.96);
  }
}
  
}
`;

export default QuizMusic;
