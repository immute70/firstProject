import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import Header from "@/componets/header";
import Footer from "@/componets/footer";
import Carousel from "@/componets/Carusel";
import About from '@/pages/about';
import ContactUs from '@/pages/contact';
import {Children, useEffect, useState} from 'react';

import Home from '@/pages/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Props} from "next/script";
import '../styles/projects.scss'



export default function App({ Component, pageProps }: AppProps) {

    const [routerLoaded, setRouterLoaded] = useState(false);

    useEffect(() => {
        import('react-router-dom').then(() => {
            setRouterLoaded(true);
        });
    }, []);

    if (!routerLoaded) {
        return <div>Loading...</div>;
    }

    const { BrowserRouter, Routes, Route } = require('react-router-dom');


    return (
      <div>
        {/*<BrowserRouter>*/}
        {/*   <Routes>*/}
        {/*        <Route path='/pages/index' element={<Home />} />*/}
        {/*        <Route path='/pages/About' element={<About />} />*/}
        {/*        <Route path='/pages/ContactUs' element={<ContactUs />} />*/}
        {/*   </Routes>*/}
        {/*</BrowserRouter>*/}
        <Header></Header>

          <Component {...pageProps} />
        <Footer></Footer>


      </div>
  )
}

