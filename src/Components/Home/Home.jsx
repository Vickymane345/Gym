import React from 'react'
import './Home.css'
import image from '../../assets/result.png'
const Home = () => {
    return (
        <div className='home container '>
          <div className='home-text'>
            <h1>EMPOWER YOURSELF ACHIEVE MORE<br/><span>GEAR UP NOW</span> !</h1>
            <img src={image} alt="" />
          </div>
        </div>
    )
}

export default Home
