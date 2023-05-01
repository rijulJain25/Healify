import React, { useState } from 'react'
import styled from 'styled-components';
import { BsFillChatDotsFill } from 'react-icons/Bs';

const Chatbot = () => {

    const [chatbot, openChatbot] = useState(false);

    return (
        <Wrapper>
            <div className={chatbot ? "chatbot active" : "chatbot"}>
                <BsFillChatDotsFill
                    className="iconsVal"
                    onClick={() => openChatbot(false)}
                />
                <div className='ChatBot_visible'>
                    <div className='heading'>
                     <h1>Healify Agent</h1>
                    </div>
                    <></>
                </div>
            </div>
        </Wrapper>
    )
};

const Wrapper = styled.section`
.chatbot{
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 30 rem;
    background-color: #777;
    z-index: 1000;
    overflow: hidden;
    background-color: transparent;
}
.ChatBot_visible{
    ${'' /* display: none; */}
    background: lightblue;
    border-radius: 25px;
    padding-bottom: 20px;
    .heading{
        background: blue;
    }
}



.chatbot_header{
    height:4rem;
    background-color: #000;
    display: flex;
    justify-content: space-between;
}

.chatbot__header--text{
    line-height: 0;
    margin: 0;
    color: #fff; 
    padding: 2rem;
    font-size: 1.6rem;
}

.chatbot__header--btn{ 
    border: none;
    background-color: transparent;
    color: red;
    padding: 2rem;
    cursor: pointer:
}

.chatbot__body{
    height: 30 rem;
    background-color: rgb(234, 234, 234);
}

.chatbot__footer{
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:6rem;
    background-color: rgb(240, 177, 177);
}

.chatbot__footer--input{
    padding: 1rem;
    width: 80%;
}

.iconsVal{
    font-size: 7rem;
    background: none;
    color: blue;
}

.chatbot__footer--btn{
    width: 20%;
    border: none;
    color: rgb(254, 254, 254);
    background-color: transparent;
    cursor: pointer;
}

`;

export default Chatbot
