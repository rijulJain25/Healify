import React from 'react'
import General2 from '../components/General2'

const About = () => {

  const data = {
    name: "About Us",
    desc: "We're 3rd year Computer Science students of Vellore Institute of Technology",
    begin: "WANT TO KNOW US?",
    img: './images/about1.svg'
  };

  return (
    <div>
      <General2 {...data}/>
    </div>
  )
}

export default About
