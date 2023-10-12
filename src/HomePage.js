import React from 'react'
import { Link } from 'react-router-dom';
import HomePageCss from './HomePage.module.css'
import "./Swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, EffectCreative, Autoplay } from 'swiper/modules';

export default function HomePage() {
  return (
    <div>

      <div className={HomePageCss.BrandsList}>
        <div className={HomePageCss.container}>
            <ul>
                <li><Link to={'/bikeslist/Orbea'}>ORBEA</Link></li>
                <li><Link to={'/bikeslist/Specialized'}>SPECIALIZED</Link></li>
                <li><Link to={'/bikeslist/BMC'}>BMC</Link></li>
                <li><Link to={'/bikeslist/Giant'}>GIANT</Link></li>
                <li><Link to={'/bikeslist/Canyon'}>CANYON</Link></li>
            </ul>
        </div>
      </div>

      <Swiper 
        navigation={true} 
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-120%', 0, -500],
          },
          next: {
            shadow: true,
            translate: ['120%', 0, -500],
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={900}
        modules={[Navigation, EffectCreative, Autoplay]}
      >

        <SwiperSlide id='Orbea'>
          <div className='container'>
            <h3>ORBEA Road</h3>
            <p>The new gains is on the road. Gain brings enough power to turn gravity down a bit<br/>but not domination the ride or remove the satisfaction.</p>
            <Link to={'/bikeslist/Orbea'}><button><span>DISCOVER ORBEA</span></button></Link>
          </div>
        </SwiperSlide>

        <SwiperSlide id='Specialized'>
          <div className='container'>
            <h3>SPECIALIZED Road</h3>
            <p>Elevate your racing performance this season with gear<br/>help you go faster, climb higher, and ride longer.</p>
            <Link to={'/bikeslist/Specialized'}><button><span>DISCOVER SPECIALIZED</span></button></Link>
          </div>
        </SwiperSlide>
        
        <SwiperSlide id='BMC'>
          <div className='container'>
            <h3>BMC Road</h3>
            <p>Designed for epic roads, dominating cobbles and pure speed against<br/>clock, our bike unlock your potential.</p>
            <Link to={'/bikeslist/BMC'}><button><span>DISCOVER BMC</span></button></Link>
          </div>
        </SwiperSlide>

        <SwiperSlide id='Giant'>
          <div className='container'>
            <h3>GIANT Road</h3>
            <p>The road calls. From high mountain peaks to neighbourhood streets<br/>and bike paths, giant road bikes are your invitation to ride.</p>
            <Link to={'/bikeslist/Giant'}><button><span>DISCOVER GIANT</span></button></Link>
          </div>
        </SwiperSlide>

        <SwiperSlide id='Canyon'>
          <div className='container'>
            <h3>CANYON Road</h3>
            <p>Grand Tour winner, World Champion bikes, world record holders.<br/>Our bike set the standard.</p>
            <Link to={'/bikeslist/Canyon'}><button><span>DISCOVER CANYON</span></button></Link>
          </div>
        </SwiperSlide>

      </Swiper>

    </div>
  )
}
