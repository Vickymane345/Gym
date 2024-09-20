import React from 'react'
import './Shape.css'
import image from '../../assets/Rectangle 3.png'
const Shape = () => {
    return (
        <div className=' shapes'>
                <div className='shape-text'>
                    <img src={image} alt=""/>
                </div>
                <div className='shape-border'>
                    </div>
                <div className=' shape-text2'>

                    <h1>ARE YOU READY TO<br/> GET IN SHAPE?</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Consequatur cum
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cumque est reiciendis esse omnis sunt rem magni.   officia reprehenderit.</p>
                    <button className='btn'>JOIN NOW</button>
                </div>

            

        </div>
    )
}

export default Shape
