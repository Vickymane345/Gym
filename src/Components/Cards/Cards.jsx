import React from 'react'
import './Cards.css'
import image_one from "../../assets/sporty-woman-with-short-black-hair-sitting-wooden-box-holding-big-black-hummer.jpg"
import image_two from "../../assets/athletic-suntanned-female-fitness-model-holding-barbell-weight-wall-from-grey-bricks.jpg"
import image_three from "../../assets/sporty-woman-with-short-black-hair-sitting-wooden-box-holding-big-black-hummer.jpg"
import image_four from "../../assets/medium-shot-fit-woman-stretching.jpg"

const Cards = () => {
  return (
    <div className="container cards ">
      <div className='card-container'>
        <div className='card-img'>
          <img src={image_one} alt="" />
        </div>
        <div className='card-img'>
          <img src={image_two} alt="" />
        </div>
        <div className='card-img'>
          <img src={image_three} alt="" />
        </div>
        <div className="card-img">
          <img src={image_four} alt="" />
        </div>
      </div>
      <div className='cards-name'>
        <div>
          <h1>WOMEN</h1>
        </div>
        <div>
          <h1>WOMEN</h1>
        </div>
        <div>
          <h1>
            WOMEN
          </h1>
        </div>
          <div>
          <h1>
            WOMEN
          </h1>
        </div>
      </div>
       
     
    </div>
  )
}

export default Cards
