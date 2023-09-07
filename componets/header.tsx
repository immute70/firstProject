import Head from "next/head";
import Image from "next/image";
import { Work_Sans } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRef } from "react";
import Home from "@/pages";

const inter = Work_Sans({ subsets: ["latin"] });

export default function Header() {
  const navRef = useRef();

  const showNavBar = () => {
    // @ts-ignore
    navRef.current.classList.toggle("responsive_navbar");
  };

  // @ts-ignore
  return (
    <>
      <header>
        <div className="header-main header-logo">
          <img src="/images/Group.svg" alt="logo-header" className="Logo"></img>
        </div>

        <div // @ts-ignore
          ref={navRef}
          className="navbar"
        >
          <Link href="/" onClick={showNavBar}>
            Home
          </Link>
          <Link href="/about" onClick={showNavBar}>
            About Us
          </Link>
          <Link href="/projects" onClick={showNavBar}>
            Project
          </Link>
          <Link href="/" onClick={showNavBar}>
            Services
          </Link>
          <Link href="/contact" onClick={showNavBar}>
            Contact Us
          </Link>
          <div onClick={showNavBar} className="nav-btn nav-close-btn">
            <img src="/images/icons8-close.svg" alt="menu" />
          </div>
        </div>
        <div onClick={showNavBar} className="nav-btn nav-menu-btn">
          <img src="/images/icons8-menu.svg" alt="menu" />
        </div>
      </header>
    </>
  );
}
