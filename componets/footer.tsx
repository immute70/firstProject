import Head from 'next/head'
import Image from 'next/image'
import {Work_Sans} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link";


const inter = Work_Sans({ subsets: ['latin'] })

export default function Footer() {
    return (
        <>
            <footer>
                <div className='footer-flex container'>
                    <div className="footer-p">
                        <p>TheBox Company © 2022. All Rights Reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
