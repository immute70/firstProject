import React, { useState } from "react";



export default function CarouselSec6() {

    const [toggleState, setToggleState] = useState(1)

    //@ts-ignore
    // const toggleTab = (index) => {
    //     setToggleState(index)
    // }



    const slides = [
        {
            url: ['/images/publication1.svg', '/images/other-publication1.svg', '/images/comercial-publication1.svg', '/images/publication4.svg'],
            infoUnderPublicH4: ['Modern Sculpture', 'Contemporary Figure', 'Contemporary Figure', 'New Artwork'],
            infoUnderPublicP: ['5028 Cedar Lane, South Dakota', '3216 Birch Street Santa Ana, Illinois', '1719 Willow Avenue, Pennsylvania', '2316 Maple Avenue, Missouri']
        },
        {
            url: ['/images/publication1.svg', '/images/publication2.svg', '/images/publication3.svg', '/images/publication4.svg'],
            infoUnderPublicH4: ['Wildstone Infra Hotel', 'Wish Stone Building', 'Mr. Parkinston’s House', 'Oregano Height'],
            infoUnderPublicP: ['2715 Ash Dr. San Jose, South Dakota', '2972 Westheimer Rd. Santa Ana, Illinois', '3517 W. Gray St. Utica, Pennsylvania', '2464 Royal Ln. Mesa, New Jersey'],
        },
        {
            url: ['/images/other-publication1.svg', '/images/other-publication2.svg', '/images/other-publication3.svg', '/images/other-publication4.svg'],
            infoUnderPublicH4: ['Modern Sculpture', 'Contemporary Figure', 'Contemporary Figure', 'Contemporary Figure'],
            infoUnderPublicP: ['5028 Cedar Lane, South Dakota', '3216 Birch Street Santa Ana, Illinois', '1719 Willow Avenue, Pennsylvania', '2310 Spruce Drive, New Jersey'],
        },
        {
            url: ['/images/comercial-publication1.svg', '/images/comercial-publication2.svg', '/images/comercial-publication3.svg', '/images/comercial-publication4.svg'],
            infoUnderPublicH4: ['DOLCE&GABBANA', 'GUCCI', 'CELINE', 'PRADA'],
            infoUnderPublicP: ['Via Carlo Goldoni, 10, Italy', 'Via de Tornabuoni, Italy', '16 rue Vivienne, France', 'Via Orobia, 3, Italy'],
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);


    // const prevSlide = () => {
    //     const isFistSlide = toggleState === 0;
    //     const newIndex = isFistSlide ? slides.length - 1 : toggleState - 1;
    //     setToggleState(newIndex)
    //
    // };
    //
    // const nextSlide = () => {
    //     const isLastSlide = toggleState === slides.length - 1;
    //     const newIndex = isLastSlide ? 0 : toggleState + 1;
    //     setToggleState(newIndex)
    //     setCurrentIndex(newIndex)
    // };

    // @ts-ignore
    // const toggleTab = (toggleState) => {
    //     const newIndex = toggleState;
    //     setToggleState(newIndex)
    // }

    const toggleTab = (index) => {
        setCurrentIndex(index);
    };

    const prevSlide = () => {
        const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);

    };

    const nextSlide = () => {
        const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };




    return (



        <div className='section-6 landSection' id='project'>
            <div className='container'>
                <div className='flex-container'>
                    <div className='sec-6-text'>
                        <h4>Projects</h4>
                        <ul>
                            <li className={currentIndex === 1 ? "point-ul" : ""} onClick={() => toggleTab(1)}><a>All</a></li>
                            <li className={currentIndex === 2 ? "point-ul" : ""} onClick={() => toggleTab(2)}><a>Commercial</a></li>
                            <li className={currentIndex === 3 ? "point-ul" : ""} onClick={() => toggleTab(3)}><a>Residential</a></li>
                            <li className={currentIndex === 4 ? "point-ul" : ""} onClick={() => toggleTab(4)}><a>Other</a></li>
                        </ul>
                    </div>

                    {/* All publication */}

                    <div className='publication-blocks'>

                        <div className={toggleState === 1 ? "publication  active-block" : "publication"}>
                            <div className='publication1 container-public'>
                                <img src={slides[currentIndex].url[0]}></img>
                                <div className='info-under-public'>
                                    <h4>{slides[currentIndex].infoUnderPublicH4[0]}</h4>
                                    <p>{slides[currentIndex].infoUnderPublicP[0]}</p>
                                </div>
                            </div>
                            <div className='publication2 container-public'>
                                <img src={slides[currentIndex].url[1]}></img>
                                <div className='info-under-public'>
                                    <h4>{slides[currentIndex].infoUnderPublicH4[1]}</h4>
                                    <p>{slides[currentIndex].infoUnderPublicP[1]}</p>
                                </div>
                            </div>
                            <div className='publication3 container-public'>
                                <img src={slides[currentIndex].url[2]}></img>
                                <div className='info-under-public'>
                                    <h4>{slides[currentIndex].infoUnderPublicH4[2]}</h4>
                                    <p>{slides[currentIndex].infoUnderPublicP[2]}</p>
                                </div>
                            </div>
                            <div className='publication4 container-public'>
                                <img src={slides[currentIndex].url[3]}></img>
                                <div className='info-under-public'>
                                    <h4>{slides[currentIndex].infoUnderPublicH4[3]}</h4>
                                    <p>{slides[currentIndex].infoUnderPublicP[3]}</p>
                                </div>
                            </div>
                        </div>

                        {/* Publication 1 */}


                        <div className={toggleState === 2 ? "publication  active-block" : "publication"}>
                            <div className='publication1 container-public'>
                                <img src={slides[currentIndex].url[0]}></img>
                                <div className='info-under-public'>
                                    <h4>{slides[currentIndex].infoUnderPublicH4[0]}</h4>
                                    <p>{slides[currentIndex].infoUnderPublicP[0]}</p>
                                </div>
                            </div>
                            <div className='publication2 container-public'>
                                <img src={slides[currentIndex].url[1]}></img>
                                <div className='info-under-public'>
                                    <h4>{slides[currentIndex].infoUnderPublicH4[1]}</h4>
                                    <p>{slides[currentIndex].infoUnderPublicP[1]}</p>
                                </div>
                            </div>
                            <div className='publication3 container-public'>
                                <img src={slides[currentIndex].url[2]}></img>
                                <div className='info-under-public'>
                                    <h4>{slides[currentIndex].infoUnderPublicH4[2]}</h4>
                                    <p>{slides[currentIndex].infoUnderPublicP[2]}</p>
                                </div>
                            </div>
                            <div className='publication4 container-public'>
                                <img src={slides[currentIndex].url[3]}></img>
                                <div className='info-under-public'>
                                    <h4>{slides[currentIndex].infoUnderPublicH4[3]}</h4>
                                    <p>{slides[currentIndex].infoUnderPublicP[3]}</p>
                                </div>
                            </div>
                        </div>

                        {/* Publication 2 */}

                        <div className={toggleState === 3 ? "publication  active-block" : "publication"}>
                            <div className='publication1 container-public'>
                                <img src={slides[currentIndex].url[0]}></img>
                                <div className='info-under-public'>
                                    <h4>{slides[currentIndex].infoUnderPublicH4[0]}</h4>
                                    <p>{slides[currentIndex].infoUnderPublicP[0]}</p>
                                </div>
                            </div>
                            <div className='publication2 container-public'>
                                <img src={slides[currentIndex].url[1]}></img>
                                <div className='info-under-public'>
                                    <h4>{slides[currentIndex].infoUnderPublicH4[1]}</h4>
                                    <p>{slides[currentIndex].infoUnderPublicP[1]}</p>
                                </div>
                            </div>
                            <div className='publication3 container-public'>
                                <img src={slides[currentIndex].url[2]}></img>
                                <div className='info-under-public'>
                                    <h4>{slides[currentIndex].infoUnderPublicH4[2]}</h4>
                                    <p>{slides[currentIndex].infoUnderPublicP[2]}</p>
                                </div>
                            </div>
                            <div className='publication4 container-public'>
                                <img src={slides[currentIndex].url[3]}></img>
                                <div className='info-under-public'>
                                    <h4>{slides[currentIndex].infoUnderPublicH4[3]}</h4>
                                    <p>{slides[currentIndex].infoUnderPublicP[3]}</p>
                                </div>
                            </div>
                        </div>

                        {/* Publication 3 */}

                        <div className={toggleState === 4 ? "publication  active-block" : "publication"}>
                            <div className='publication1 container-public'>
                                <img src={slides[currentIndex].url[0]}></img>
                                <div className='info-under-public'>
                                    <h4>{slides[currentIndex].infoUnderPublicH4[0]}</h4>
                                    <p>{slides[currentIndex].infoUnderPublicP[0]}</p>
                                </div>
                            </div>
                            <div className='publication2 container-public'>
                                <img src={slides[currentIndex].url[1]}></img>
                                <div className='info-under-public'>
                                    <h4>{slides[currentIndex].infoUnderPublicH4[1]}</h4>
                                    <p>{slides[currentIndex].infoUnderPublicP[1]}</p>
                                </div>
                            </div>
                            <div className='publication3 container-public'>
                                <img src={slides[currentIndex].url[2]}></img>
                                <div className='info-under-public'>
                                    <h4>{slides[currentIndex].infoUnderPublicH4[2]}</h4>
                                    <p>{slides[currentIndex].infoUnderPublicP[2]}</p>
                                </div>
                            </div>
                            <div className='publication4 container-public'>
                                <img src={slides[currentIndex].url[3]}></img>
                                <div className='info-under-public'>
                                    <h4>{slides[currentIndex].infoUnderPublicH4[3]}</h4>
                                    <p>{slides[currentIndex].infoUnderPublicP[3]}</p>
                                </div>
                            </div>
                        </div>

                        <div className='sec6-points sec6-points-mobile'>
                            <div className='circle-points circle-points-blue'></div>
                            <div className='circle-points'></div>
                            <div className='circle-points'></div>
                            <div className='circle-points'></div>
                            <div className='circle-points'></div>
                        </div>

                        <div className='sec-6-buttons'>
                            <div className='button-container button-left' onClick={prevSlide}>
                                <img src="/Vector-left.svg"></img>
                                <a>Back</a>
                            </div>
                            <div className='sec6-points'>
                                <div className='circle-points circle-points-blue'></div>
                                <div className='circle-points'></div>
                                <div className='circle-points'></div>
                                <div className='circle-points'></div>
                                <div className='circle-points'></div>
                            </div>
                            <div className='button-container button-right' onClick={nextSlide}>
                                <a>Next</a>
                                <img src="/Vector-right.svg"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}