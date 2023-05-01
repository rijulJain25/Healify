import React from 'react'
import General2 from '../components/General2';
import Service from '../components/Service';

const Services = () => {
  
  const data = {
    name: "Services",
    desc: "Here are the services which we provide to get better and stable mental heath condition, so that one can work more efficiently and stressfree",
    begin: "Here we go",
    img: './images/services.png'
  };
  
  return (
    <div>
      <General2 {...data} />
      <Service />
    </div>
  )
}

export default Services
