import { Inter } from "next/font/google";
import Header from "@/componets/header";
import Footer from "@/componets/footer";
import TelegramIcon from "@mui/icons-material/Telegram";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <div className="landSection container">
      <div className="contact-us-flex">
        <div className="flex space-y-6">
          <div>
            <h1 className="landSection-title">Contact Us</h1>
            <div className="sec-8-text">
              <p>
                <span>Address:</span> 6391 Elgin St. Celina, Delaware 10299
              </p>
              <p>
                <span>Phone:</span> +84 1102 2703
              </p>
              <p>
                <span>Email:</span> hello@thebox.com
              </p>
            </div>
          </div>
          <div className="chat-contact ">
            <div className="chat-contact-center">
              <img
                src="/images/icons8-telegram1.svg"
                className="telegram"
              ></img>
              <p>Chat with TheBox</p>

              <a className="btn-chat-contact">Enter</a>
            </div>
          </div>
        </div>
        <div className="google-map">
          <iframe
            className="large-google-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8144.576759590956!2d-77.89256683544899!3d34.12195263148058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f7abd5e342ff%3A0xe567031d8fe8a71b!2zRWxnaW4gU3QsIE15cnRsZSBHcm92ZSwgTkMgMjg0MDksINCh0KjQkA!5e0!3m2!1sru!2sua!4v1688564760080!5m2!1sru!2sua"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <iframe
            className="small-google-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13211.66917786383!2d-77.885476!3d34.122867!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89a9f7abd5e342ff%3A0xe567031d8fe8a71b!2zRWxnaW4gU3QsIE15cnRsZSBHcm92ZSwgTkMgMjg0MDksINCh0KjQkA!5e0!3m2!1sru!2sua!4v1691620105403!5m2!1sru!2sua"
            width="400"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
