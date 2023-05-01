import React from 'react'
import { Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';


const ServiceCard = ({ title, description, imgUrl, link}) => {
  return (
    <Col size={11} sm={6} md={6} className= "column1">
      <div className="proj-imgbx">
        <img className='imgbox' src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          
          <a className='nav-link' href={link}><NavLink>Go to →</NavLink></a>

        </div>
      </div>
    </Col>
  )
};

export default ServiceCard
