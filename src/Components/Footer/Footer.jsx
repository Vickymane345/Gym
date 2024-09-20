import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaMailBulk } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_content'>
        <div className='footer_subscribe'>
            <p>Subscribe On Our Newsletter</p>
            <p>Get daily news on upcoming offers from many suppliers all over the world</p>
            <div className='footer_head'>
            <h1>READY FOR</h1>
            <h1><span>AWESOME</span> LIFE?</h1>
            </div>
           
            <div className='footer_mail'>
                <FaMailBulk/>
                <p>victorchikwado122@gmail.com</p>
            </div>
        </div>
        <div className='footer_content2'>
            <div className='footer_input'>
                <input type='email' placeholder="Email" />
                <button className='btn'>Subscribe</button>
            </div>
            <div className='footer_media'>
                <button>Review Website</button>
                <div className='social_media'>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaLinkedin/>
                </div>
            </div>


        </div>
      </div>
    </div>
  )
}

export default Footer
