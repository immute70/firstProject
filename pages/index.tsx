import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState } from "react";
import styles from '@/styles/Home.module.css'
import Carousel from "@/componets/Carusel";
import CarouselSec6 from "@/componets/CarouselSec6";
import Header from "@/componets/header";
import Footer from "@/componets/footer";



const inter = Inter({ subsets: ['latin'] })

export default function Home() {




  return (
    <>
      <Head>
        <title>My first project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>

          <Carousel></Carousel>

          

          <div className='section-1 landSection'>
              <div className='container '>
                  <div className='heading'>
                      <h2>Our Reputation</h2>

                  </div>
                  <div className='grid-3-col'>
                      <div className='colum'>
                          <img src="/images/Vector-headphones.svg" alt='VectorHeadphones'></img>
                          <h4>Best Services</h4>
                          <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>

                      </div>
                      <div className='colum'>
                          <img src="/images/Vector-headphones.svg" alt='VectorHEadphones'></img>
                          <h4>Best Teams</h4>
                          <p>Cursus semper tellus volutpat aliquet lacus. </p>
                      </div>
                      <div className='colum'>
                          <img src="/images/icon.svg" alt='icon'></img>
                          <h4>Best Designs</h4>
                          <p>Ultricies at ipsum nunc, tristique nam lectus.</p>
                      </div>
                  </div>
              </div>

          </div>
          <div className='section-2 landSection' id='about'>
              <div className='container'>
                  <div className='about-end'>
                      <div className='about-us'>
                          <h4>About Us</h4>
                          <p>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.  </p>
                          <p className='p-2'>We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
                          <div className='btn-sec-2'>
                              <a href='/pages/about.tsx' className='button-section-2'>More on Our History</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='section-2-mobile landSection' id='about'>
              <div className='container'>
                  <div className='about-end'>

                      <img src="/images/avatar.png" alt="" id='about-img'/>

                      <div className='about-us'>
                          <h4>About Us</h4>
                          <p>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.  </p>
                          <p className='p-2'>We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
                          <div className='btn-sec-2'>
                              <a href='#' className='button-section-2'>More on Our History</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className='section-3 landSection'>
              <div className='container'>
                  <div className='heading'>
                      <h2>Services</h2>
                  </div>
                  <div className='flex-6-col'>
                      <div className='flex-colum text-color-sec3'>
                          <img src="/images/serv-icon1.svg" alt=''></img>
                          <div className='underline'></div>
                          <h4>Construction</h4>
                      </div>
                      <div className='flex-colum flex-colum-blue'>
                          <img src="/images/serv-icon2.svg" alt=''></img>
                          <div className='underline'></div>
                          <h4>Renovation</h4>
                      </div>
                      <div className='flex-colum text-color-sec3'>
                          <img src="/images/serv-icon3.svg" alt=''></img>
                          <div className='underline'></div>
                          <h4>Consultation</h4>
                      </div>
                      <div className='flex-colum flex-colum-blue'>
                          <img src="/images/serv-icon4.svg" alt=''></img>
                          <div className='underline'></div>
                          <h4>Repair Services</h4>
                      </div>
                      <div className='flex-colum text-color-sec3'>
                          <img src="/images/serv-icon5.svg" alt=''></img>
                          <div className='underline'></div>
                          <h4>Architecture</h4>
                      </div>
                      <div className='flex-colum flex-colum-blue'>
                          <img src="/images/serv-icon6.svg" alt=''></img>
                          <div className='underline'></div>
                          <h4>Electric</h4>
                      </div>
                  </div>
              </div>
          </div>
          <div className='section-4 landSection'>
              <div className='container flex-blocks'>
                  <div className='section-block'>
                      <div className='four-of-blocks'>
                          <div className='flex-img-number'>
                            <img src="/images/iconofblock1.svg"></img>
                            <h4>84</h4>
                          </div>
                          <div className='p-flex'>
                              <div className='vertical-line'></div>
                              <p>Happy Clients</p>
                          </div>
                      </div>
                      <div className='four-of-blocks'>
                          <div className='flex-img-number'>
                            <img src="/images/iconofblock2.svg"></img>
                            <h4>123</h4>
                          </div>
                          <div className='p-flex'>
                              <div className='vertical-line'></div>
                              <p>Projects Completed</p>
                          </div>
                      </div>
                      <div className='four-of-blocks'>
                          <div className='flex-img-number'>
                            <img src="/images/iconofblock3.svg"></img>
                            <h4>37</h4>
                          </div>
                          <div className='p-flex'>
                              <div className='vertical-line'></div>
                              <p>Awards Win</p>
                          </div>
                      </div>
                      <div className='four-of-blocks'>
                          <div className='flex-img-number'>
                            <img src="/images/iconofblock4.svg"></img>
                            <h4>34</h4>
                          </div>
                          <div className='p-flex'>
                              <div className='vertical-line'></div>
                              <p>Years in Business</p>
                          </div>
                      </div>
                  </div>
                  <div className='text-block'>
                      <h3>30 Years Experience</h3>
                      <p>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
                      <a href='#'>Contact Us</a>
                  </div>
              </div>
          </div>
          <div className='section-5 landSection'>
              <div className='flex-sec-5 container'>
                  <div className='sec-5-text'>
                      <h4>Free consultation with exceptional quality</h4>
                      <p>Just one call away: <u>+84 1102 2703</u></p>
                  </div>
                  <div className='sec-5-button'>
                        <a href='#'>Get your consultation</a>
                  </div>
              </div>
          </div>
          <CarouselSec6></CarouselSec6>
          <div className='section-7 landSection'>
              <div className='container'>
                  <div className="form-container">
                      <div className="form-text">
                          <h4>What can us do for you?</h4>
                          <p>We are ready to work on a project of any complexity, whether it’s commercial or residential.</p>
                      </div>
                      <div className="input-form">
                          <form className="input-form2">
                              <div className="form-group">
                                  <input className="form-input" placeholder="Your Name*"/>

                              </div>
                              <div className="form-group">
                                  <input className="form-input" placeholder='Email*'/>

                              </div>
                              <div className="form-group">
                                  <input className="form-input" placeholder="Reason for contacting*"/>

                              </div>
                              <div className="form-group">
                                  <input className="form-input" placeholder="Phone"/>

                              </div>
                              <div className="form-group">
                                  <textarea className="form-input form-input-width" placeholder='Message'/>
                              </div>
                          </form>
                      </div>
                  </div>
                  <div className='form-button'>
                      <p><span className='required'>*</span> indicates a required field</p>
                      <div className="button-below-form">
                          <a>Submit</a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="section-8 landSection">
              <div className='sec-8-flex container'>
                  <div className='sec-8-text'>
                      <p><span>Address:</span> 6391 Elgin St. Celina, Delaware 10299</p>
                      <p><span>Phone:</span>  +84 1102 2703</p>
                      <p><span>Email:</span> hello@thebox.com</p>
                      <div className="sec-8-logo the-box">
                          <img src="/images/Group.svg" alt='logo-header' className='Logo'></img>
                          <h2><em>The</em>Box</h2>
                      </div>

                  </div>
                  <div className='sec-8-input'>
                      <p>Newsletter:</p>
                      <div className="form-and-button">
                          <input placeholder='Your email here'></input>
                          <a>Subscribe</a>
                      </div>
                      <div className='social-mobile'>
                          <div>
                              <div className="sec-8-logo-mobile the-box">
                                  <img src="/images/Group.svg" alt='logo-header' className='Logo'></img>
                                  <h2><em>The</em>Box</h2>
                              </div>
                          </div>
                          <div>
                              <p>Social:</p>
                              <div className='social'>
                                  <img src='/images/icon-facebook.svg'></img>
                                  <img src='/images/icon-linkedin.svg'></img>
                                  <img src='/images/icon-twitter.svg'></img>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>


      </main>
    </>
  )
}
