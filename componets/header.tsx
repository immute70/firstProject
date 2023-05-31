import Head from 'next/head'
import Image from 'next/image'
import {Work_Sans} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import {useState, useEffect} from "react";


const inter = Work_Sans({ subsets: ['latin'] })

export default function Header() {
    // const [toggleMenu, setToggleMenu] = useState(false)
    //
    // // const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    //
    // const toggleNav = () => {
    //     setToggleMenu(!toggleMenu)
    // }
    //
    // const [screenWidth, setScreenWidth] = useState(
    //     typeof window !== 'undefined' ? window.innerWidth : 0
    // );
    //
    // useEffect(() => {
    //
    //     const changeWidth = () => {
    //         setScreenWidth(window.innerWidth)
    //     }
    //
    //     window.addEventListener('resize', changeWidth)
    //
    //     return () => {
    //         window.removeEventListener('resize', changeWidth);
    //     };
    //
    // }, []);

    // create a fun





    return (
        <>
            <header>

                <div className='header-main header-logo'>
                    <img src="/images/Group.svg" alt='logo-header' className='Logo'/>
                </div>


                {/*<div>*/}
                {/*    <div className='header-main header-link-div container'>*/}
                {/*        <Link href='/' className='header-link home'>Home</Link>*/}
                {/*        <Link href='#about' className='header-link about'>About Us</Link>*/}
                {/*        <Link href='#project' className='header-link projects'>Projects</Link>*/}
                {/*        <Link href='/' className='header-link services'>Services</Link>*/}
                {/*        <Link href='/' className='header-link contact-us'>Contact Us</Link>*/}
                {/*    </div>*/}

                {/*    /!*{(toggleMenu || screenWidth > 500) && (*!/*/}
                {/*    /!*    *!/*/}
                {/*    /!*)}*!/*/}


                {/*    <img src='/images/icons8-menu.svg'  className='btn-header'/>*/}
                {/*</div>*/}

            </header>
        </>
    )
}
