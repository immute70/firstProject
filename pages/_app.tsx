import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@/componets/header";
import Footer from "@/componets/footer";
import Carousel from "@/componets/Carusel";
import AboutUs from '@/pages/AboutUs';
import ContactUs from '@/pages/ContactUs';
import { useEffect, useState } from 'react';

import Home from '@/pages/index';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';



export default function App() {

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
        <BrowserRouter>
           <Routes>
                <Route path="/pages/index" element={<Home />} />
                <Route path="/pages/AboutUs" element={<AboutUs />} />
                <Route path="/pages/ContactUs" element={<ContactUs />} />
           </Routes>
        </BrowserRouter>
      </div>
  )
}
