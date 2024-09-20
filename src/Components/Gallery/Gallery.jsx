import React from 'react'
import './Gallery.css'
import image1 from '../../assets/lifting.jpg'
import image2 from '../../assets/running.jpg'
const Gallery = () => {
    return (
        <div className=''>
            <div className='grid-container'>
                <div className="item1">
                    <img src={image2} alt=""/>
                </div>
                <div className="item2">
                    <img src={image1} alt=''/>
                </div>
                <div className="item3">
                    <img src={image2} alt=""/>
                </div>
                <div className="item4">
                    <img src={image1} alt=''/>
                </div>
            </div>
            <div className='grid-container2'>
                <div className="item5">
                    <img src={image1} alt=""/>
                </div>
                <div className='item6'>
                    <img src={image2} alt=''/>
                </div>
                <div className="item7">
                    <img src={image1} alt=""/>
                </div>
                <div className="item8">
                    <img src={image2} alt=''/>
                </div>
            </div>
        </div>
    )
}

export default Gallery
