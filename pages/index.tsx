import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'



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
          <div className='main-hero-div'>
              {/*<img src={hero} alt='main-background' className='main-hero'></img>*/}
              <div className='main-text the-box'>
                <h2><em>The</em>Box</h2>
              </div>
              <div className='main-text first-block-text'>
                  <h1>Building things is our mission.</h1>
              </div>
              <div className='feature-block'>
                    <div className='square'>
                        <div className='feature-heading'><h3>Feature Projects</h3></div>
                        <div className='feature-p'><p>The National University of Architecture</p></div>
                        <div className='square-button square-button-left'>
                            <div className='inside-button'>
                                <img src="/Vector-left.svg"></img>
                                <p className='button-text'>Back</p>
                            </div>
                        </div>
                        <div className='square-button square-button-right'>
                            <div className='inside-button'>
                                <p className='button-text'>Next</p>
                                <img src="/Vector-right.svg"></img>
                            </div>
                        </div>
                    </div>
              </div>
          </div>
          <div className='section-1 landSection'>
              <div className='container '>
                  <div className='heading'>
                      <h2>Our Reputation</h2>
                  </div>
                  <div className='grid-3-col'>
                      <div className='colum'>
                          <img src="/images/Vector-headphones.png" alt='VectorHeadphones'></img>
                          <h4>Best Services</h4>
                          <p>Nullam senectus porttitor in eget. Eget rutrum leo interdum.</p>
                      </div>
                      <div className='colum'>
                          <img src="/images/Vector-headphones.png" alt='VectorHEadphones'></img>
                          <h4>Best Teams</h4>
                          <p>Cursus semper tellus volutpat aliquet lacus. </p>
                      </div>
                      <div className='colum'>
                          <img src="/images/icon.png" alt='icon'></img>
                          <h4>Best Designs</h4>
                          <p>Ultricies at ipsum nunc, tristique nam lectus.</p>
                      </div>
                  </div>
              </div>

          </div>
          <div className='section-2 landSection'>
              <div className='container'>
                  <div className='about-end'>
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
              </div>
          </div>
      </main>
    </>
  )
}
