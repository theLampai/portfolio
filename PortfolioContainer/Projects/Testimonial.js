import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Testimonial.css';
import first from '../../../src/img/Testimonial/1.png';
import second from '../../../src/img/Testimonial/2.png';
import third from '../../../src/img/Testimonial/3.png';
import forth from '../../../src/img/Testimonial/4.png';
import fifth from '../../../src/img/Testimonial/5.png';
import sixth from '../../../src/img/Testimonial/6.png';

export default function Testemonail(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id)
            return;
        Animations.animations.fadeInScreen(props.id);
    };
    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

        const options ={
            loop: true,
            margin: 0,
            nav: true,
            animateIn: "bounceInRight",
            animateOut: "bounceInRight",
            dots: true,
            autoplay: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                  },
                  768: {
                    items: 1,
                  },
                  1100: {
                    items: 3,
                  },
                },
              };


    return (
        <div>
            <ScreenHeading
                title={'My Projects'}
                subHeading={"LATEST"}
            />
            <section className='testimonial-section' id={props.id || ''}>
                <div className='container'>
                    <div className='row'>
                        <OwlCarousel className='owl-carousel' id='testimonial-carousel'{...options}>

                            <div className='col-lg-12'>
                                <div className='testi-item'>
                                    <div className='testi-comment'>
                                       
                                          
                                        
                                    </div>
                                    <div className='client-info'>
                                        <img 
                                        src={first}
                                        alt='no internet connection' >

                                    </img>
                                    <h2> Register Page / E-Shop Web Site </h2>
                                    <p></p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='testi-item'>
                                    <div className='testi-comment'>
                                        
                                            
                                        
                                    </div>
                                    <div className='client-info'>
                                        <img 
                                        src={second}
                                        alt='no internet connection' >

                                    </img>
                                    <h2> Home Page / Small Business or E-Bank </h2>
                                    <p></p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='testi-item'>
                                    <div className='testi-comment'>
                                        
                                
                                        
                                    </div>
                                    <div className='client-info'>
                                        <img 
                                    src={third}
                                        alt='no internet connection' >

                                    </img>
                                    <h2> Home Page / E-Shop Web Site</h2>
                                    <p></p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='testi-item'>
                                    <div className='testi-comment'>
                                       
                                           
                                        
                                    </div>
                                    <div className='client-info'>
                                        <img 
                                        src={forth}
                                        alt='no internet connection' >

                                    </img>
                                    <h2> Filter Products / E-Shop Web Site </h2>
                                    <p></p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='testi-item'>
                                    <div className='testi-comment'>
                                       
                                        
                                    </div>
                                    <div className='client-info'>
                                        <img 
                                        src={fifth}  
                                        alt='no internet connection' >

                                    </img>
                                    <h2> Cart and Bag / E-Shop Web Site </h2>
                                    <p></p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='testi-item'>
                                    <div className='testi-comment'>
                                       
                                          
                                        
                                    </div>
                                    <div className='client-info'>
                                        <img 
                                        src={sixth} 
                                        alt='no internet connection' >

                                    </img>
                                    <h2> Product List / E-Shop Web Site </h2>
                                    <p></p>

                                    </div>
                                </div>
                            </div>

                        </OwlCarousel>
                    </div>

                </div>
            </section>

        </div>
    )
}
