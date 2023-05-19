import Head from 'next/head'
import Image from 'next/image'
import {Work_Sans} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import logo from '../public/Group.png'


const inter = Work_Sans({ subsets: ['latin'] })

export default function Header() {
    return (
        <>
            <header>
                <div className='header-main header-logo'>
                    <Image src={logo} alt='logo-header' className='Logo'></Image>
                </div>

                <div className='header-main header-link-div'>
                    <Link href='/' className='header-link home'>Home</Link>
                    <Link href='/about' className='header-link about'>About Us</Link>
                    <Link href='/' className='header-link projects'>Projects</Link>
                    <Link href='/' className='header-link services'>Services</Link>
                    <Link href='/' className='header-link contact-us'>Contact Us</Link>
                </div>
            </header>
        </>
    )
}
