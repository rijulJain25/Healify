
import React from 'react'
import { Row } from 'react-bootstrap'
import styled from 'styled-components';
import { Button } from '../styles/Button';

const Game = () => {
  return (
      <Wrapper>
      <section className='game-section'>
        <div className='container game-contain'>
          <div className='game-head'>
            <h2 style={{textAlign: "left"}}>Let's play Some games</h2>
            <p>Best way to refresh minds not only for professionals but also for kids and students</p>
          </div>
          <div className='game-body'>
            <Row className='row-game'>
                <h4 style={{textAlign: 'left'}}>Game1</h4>
                <div className='row-second-div'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className='row-img-div'>
                  <img src="/images/game1.jpeg" alt="game1" className='row-img'></img>
                  <Button>
                      <a href="https://dino-abd-360.netlify.app/">Play Game</a>
                  </Button>
                  </div>
                </div>
                
            </Row>
            <Row className='row-game'>
                <h4 style={{textAlign: 'left'}}>Game2</h4>
                <div className='row-second-div'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className='row-img-div'>
                  <img src="/images/game2.webp" alt="game2" className='row-img'></img>
                  <Button>
                      <a href="https://abd-2048-game.netlify.app/">Play Game</a>
                  </Button>
                  </div>
                </div>
            </Row>
            <Row className='row-game'>
                <h4 style={{textAlign: 'left'}}>Game3</h4>
                <div className='row-second-div'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className='row-img-div'>
                  <img src="/images/game3.jpeg" alt="game3" className='row-img'></img>
                  <Button>
                      <a href="https://dino-abd-360.netlify.app/">Play Game</a>
                  </Button>
                  </div>
                </div>
            </Row>
            <Row className='row-game'>
                <h4 style={{textAlign: 'left'}}>Game4</h4>
                <div className='row-second-div'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className='row-img-div'>
                  <img src="/images/game1.jpeg" alt="game3" className='row-img'></img>
                  <Button>
                      <a href="https://dino-abd-360.netlify.app/">Play Game</a>
                  </Button>
                  </div>
                </div>
            </Row>
          </div>
        </div>
      </section>
      </Wrapper>
  )
};

const Wrapper = styled.section`


align-items: left;
justify-content: left;
text-align: left;
background-image: linear-gradient(90.21deg, #1585c5 -5.91%, #1f22c7 111.58%);

.container{
    display: flex;
    gap: 7rem;
    ${'' /* box-shadow: 1px 2px 20px 1px grey; */}
    
    ${'' /* background-image: linear-gradient(90.21deg, #1585c5 -5.91%, #1f22c7 111.58%); */}
}

.game-head{
    width: 40%;
    height: 200px;
    padding-top: 80px;
    position: sticky;
    top: 0;

    h2{
        font-size: 55px;
        font-weight: 700;
        color: white;
    }
    p{
        color: white;
        opacity: 0.8;
    }
}

.game-body{
    width: 60%;
    background-color: white;
    padding: 100px 100px;
    gap: 7rem;
}

.row-img{
    ${'' /* max-width: 50%; */}
    width: 200px;
    height: 130px;
}

.row-game{
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 40px;
    border-bottom: 1px solid black;
}

.row-second-div{
    display:flex;
    gap: 4rem;

    p {
        padding-top: 20px;
    }
}

.row-img-div{
    display:flex;
    flex-direction: column;
    align-items: center;
}
`;

export default Game
