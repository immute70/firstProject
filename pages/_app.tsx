import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@/componets/header";
import Footer from "@/componets/footer";
import Carousel from "@/componets/Carusel";

export default function App({ Component, pageProps }: AppProps) {

  return (
      <div>
          <Header></Header>
          <Carousel></Carousel>

          <Component {...pageProps} />


          <Footer></Footer>
      </div>
  )
}
