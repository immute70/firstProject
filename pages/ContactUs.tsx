import { Inter } from 'next/font/google'
import Header from "@/componets/header";
import Footer from "@/componets/footer";

const inter = Inter({ subsets: ['latin'] })

export default function AboutUs() {

    return (
        <div>
            <Header></Header>

            <div>

                <div>Contact us</div>

            </div>

            <Footer></Footer>
        </div>

    )


}