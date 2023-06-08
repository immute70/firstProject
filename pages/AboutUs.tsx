import { Inter } from 'next/font/google'
import Header from "@/componets/header";
import Footer from "@/componets/footer";

const inter = Inter({ subsets: ['latin'] })

export default function AboutUs() {

    return (
        <div>
            <Header></Header>

            <div className='landSection'>
                <div className='about-text container'>
                    <h1>About us</h1>
                    <h2>Building Excellence for Over 30 Years</h2>
                    <p>For more than three decades, we have been dedicated to delivering world-class construction services, forging strong and enduring relationships along the way. Our unwavering commitment to excellence has established us as a trusted leader in the industry, renowned for quality, innovation, and reliability in construction projects across the United States.</p>
                    <h2>A Team of Experts Driving Success</h2>
                    <p>Our success is driven by our exceptional team of experienced professionals who bring their expertise, dedication, and creativity to every project. Collaboration is at the heart of our approach, fostering open communication, innovative thinking, and an unwavering pursuit of excellence. With a deep understanding of our clients' unique needs, we deliver customized solutions that consistently exceed expectations.</p>
                    <h2>Diverse Portfolio, Unparalleled Expertise</h2>
                    <p>Our extensive portfolio showcases our ability to handle a diverse range of construction projects, spanning commercial and residential developments, infrastructure, and industrial facilities. From intricate architectural designs to large-scale engineering marvels, we demonstrate our unwavering commitment to the highest standards of quality and craftsmanship. Each project is a testament to our expertise and our ability to deliver outstanding results.</p>
                    <h2>Contact Us for Your Next Project</h2>
                    <p>Thank you for considering us for your construction needs. We are excited about the opportunity to work with you and bring your vision to life. Whether it's a commercial development, a residential project, or an infrastructure undertaking, our team is ready to collaborate and deliver exceptional results. Contact us today to learn more about our services or to discuss your upcoming project. Let us build excellence together.</p>

                    <div className='flex-about-logo the-box'>
                        <img src="/images/Group.svg" alt='logo-header' className='about-logo'/>
                        <h2><em>The</em>Box</h2>
                    </div>

                </div>
            </div>

            <Footer></Footer>
        </div>

    )


}