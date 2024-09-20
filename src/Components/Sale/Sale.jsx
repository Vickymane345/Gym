import React, {useRef} from 'react'
import './Sale.css'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import img_one from '../../assets/invictus go _ Almaty _ gym zone _ 2022 1.png'
import img_two from '../../assets/karate.jpg'
import img_four from '../../assets/workut.jpg'
import img_five from '../../assets/boxing.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sale = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
      
    };
    return (
        <div>
            <IoIosArrowForward className='next-btn' size={36} onClick={next}  />
            <IoIosArrowBack className='prev-btn' size={36}  onClick={previous} />

            <div className="slider-container">

                <Slider ref={slider => {
                  sliderRef = slider
                }} {...settings}>
                    <div className='slider-content slider-one'>
                      <div className="slider-text">
                         <p>WINTER</p>
                        
                            <h1 className=''>S<span>A</span>L<span>E</span></h1>
                        
                        <button className='btn outline-btn'>up to 60%</button>
                      </div>
                       
                    </div>
                    <div className='slider-content'>
                        <img src={img_one}  alt=""/>
                    </div>
                    <div className='slider-content'>
                        <img src={img_two} alt=""/>
                    </div>
                    <div className='slider-content'>
                        <img src={img_five} alt=''/>
                    </div>
                    <div className='slider-content'>
                        <img src={img_four} alt=""/>
                    </div>
                    <div className='slider-content'>
                        <img src={img_five} alt=""/>
                    </div>
                    <div className='slider-content'>
                        <img src={img_four} alt=""/>
                    </div>
                    <div className='slider-content'>
                        <img src={img_one} alt=""/>
                    </div>
                    <div className='slider-content'>
                        <img src={img_four} alt=""/>
                    </div>
                    <div className='slider-content'>
                        <img src={img_five} alt=""/>
                    </div>
                </Slider>
            </div>
        </div>

    );
}

export default Sale
