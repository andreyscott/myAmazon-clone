import React from "react";
import ImageSlider from './components/Slider';
import { SliderData } from './components/SliderData';
import Product from "./Product";
import "./slider.css";
import "./Home.css";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <ImageSlider  className="home__image" slides={SliderData} />;
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        /> */}

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="49538586"
            title="Heighten your experiences. Enrich your adventures. Let the super charged PS4 Pro lead the way"
            price={452.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41GGPRqTZtL._AC_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="8023850"
            title="COWIN E7 Active Noise Cancelling Headphones Bluetooth Headphones with Microphone Deep Bass Wireless Headphones Over Ear, Black"
            price={249.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41WzHq0SkRL._AC_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="908322332"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, Silver"
            price={94.98}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL._AC_US160_.jpg"
          />
          <Product
            id="90322332"
            title="Condoms, Ultra Fine, Ribbed, Dotted with Delay Lubricant, Durex Performax Intense Natural Rubber Latex Condoms, 24"
            price={24.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/91VfvfSu7sL._AC_UL320_.jpg"
          />
          
          <Product
            id="9083132"
            title="1080P Webcam with Microphone, Wansview USB 2.0 Desktop Laptop Computer Web Camera with Auto Light Correction, Plug and Play, for Windows Mac OS, for Video Streaming, Conference, Gaming,"
            price={4.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41QyeCl1kGL._AC_US160_.jpg"
          />

        </div>

        <div className="home__row">
        <Product
            id="9083132"
            title="RAVPower Portable Charger 15000mAh PD3.0 Power Bank QC 3.0, 18W High-Speed Ultra Compact USB C Battery Pack Tri-Input"
            price={14.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/61F1s2l1jxL._AC_UY218_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
