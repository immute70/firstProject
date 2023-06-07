import React, {useState} from "react";
import {filterReqHeaders} from "next/dist/server/lib/server-ipc/utils";

export default function Carusel() {

    const slides = [
        {
            url: '/images/Hero.svg',
            firstBlockText: 'Building things is our mission.',
            featureP: 'The National University of Architecture',
        },
        {
            url: '/images/hero2.svg',
            firstBlockText: 'Building things is our mission.',
            featureP: 'Willis Tower (formerly Sears Tower)',
        },
        {
            url: '/images/hero3.svg',
            firstBlockText: 'Building things is our mission.',
            featureP: 'International Commerce Centre',
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFistSlide = currentIndex === 0;
        const newIndex = isFistSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    };
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };

    return (

            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='main-hero-div duration-500'>
                {/*<img src={hero} alt='main-background' className='main-hero'></img>*/}
                <div className='the-box'>
                    <div className='main-text the-box'>
                        <h2><em>The</em>Box</h2>
                    </div>
                </div>
                <div className={`main-text first-block-text ${currentIndex === 0 ? 'first-slide' : currentIndex === 1 ? 'second-slide' : 'third-slide'}`}>
                    <h1>{slides[currentIndex].firstBlockText}</h1>
                </div>
                <div className='feature-block'>
                    <div className='square'>
                        <div className='feature-heading'><h3>Feature Projects</h3></div>
                        <div className='feature-p'><p>{slides[currentIndex].featureP}</p></div>
                        <div className='square-button square-button-left' onClick={prevSlide}>
                            <div className='inside-button'>
                                <img src="/Vector-left.svg"></img>
                                <p className='button-text'>Back</p>
                            </div>
                        </div>
                        <div className='square-button square-button-right' onClick={nextSlide}>
                            <div className='inside-button'>
                                <p className='button-text'>Next</p>
                                <img src="/Vector-right.svg"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
}