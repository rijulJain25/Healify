import React from 'react'
import Chatbot from '../components/Chatbot'
import General from '../components/General'
import Service from '../components/Service'
import Stats from '../components/Stats'

const Home = () => {
  return (
    <div>
      <General />
      <Stats />
      <Service />
    </div>
  )
}

export default Home
