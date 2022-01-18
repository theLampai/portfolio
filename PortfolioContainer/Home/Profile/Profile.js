import React from 'react';
import Typical from "react-typical";
import ScrollService from '../../../utilities/ScrollService';
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://www.facebook.com/alieskii'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://github.com/theLampai'>
                            <i className='fa fa-github'></i>
                        </a>
                        <a href='https://www.instagram.com/islam.alieski/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/islam-alieski-2b053b21b/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://twitter.com/AlieskiIslam'>
                            <i className='fa fa-twitter'></i>
                        </a>
                        </div>
                    </div>

                    <div className="profile-details-name">
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className="highlighted-text">ISLAM</span>
                        </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                            <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Wordpress w/Elementor 💻",
                    1000,
                    "Mern stack Dev 📱",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                />
              </h1>
                      
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building apps with front and back end operations.
                            </span>
                        </span>
                    </div>
                   <div className='profile-options'>
                       <button className='btn primary-btn'
                        onClick={() => ScrollService.scrollHandler.scrollToHireMe()} >
                           
                           Hire Me
                       </button>
                       <a href="IslamCV.pdf" download="Islam Alieski. pdf">
                           <button className='btn highlighted-btn'>Get Resume</button>
                       </a>
                       </div> 
                
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
            </div>
        </div>
    )
}
