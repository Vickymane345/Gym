import React from 'react'
import './Reviews.css'
const Reviews = (props) => {
    return (
        <div className='ReviewCards'>
            <div className='review_content'>
                <div className='reviewImg'>
                    <img src={props.image} alt=""/>
                    <p>{props.name}</p>
                </div>
                <div className='review_description'>
                    <p>{props.description}</p>
                </div>
                <div>
                    {props.rating}
                </div>
            </div>
        </div>
    )
}

export default Reviews
