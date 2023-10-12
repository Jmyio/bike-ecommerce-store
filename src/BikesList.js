import React, { useEffect, useState } from 'react';
import BikesListCss from './BikesList.module.css';
import "./BikesListSwiper.css"
import { Link, useParams } from 'react-router-dom';
import jsonData from './json file/BikesInfo.json';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';

export default function BikesList() {
  let params = useParams();
  const [bikesList, setBikesList] = useState([]);

  const [brandImg, setBrandImg] = useState('');
  const [backgroundImg, setBackgroundImg] = useState('');

  const [SBGimg1, setSBGimg1] = useState("");
  const [SBGimg2, setSBGimg2] = useState("");

  const [desc1, setDesc1] = useState("")
  const [desc2, setDesc2] = useState("")

  const [switchPane, setSwitchPane] = useState(false);
  const [switchPane2, setSwitchPane2] = useState(false);


  useEffect(() => {
    const bikesListData = jsonData.bikes.find(bikes => bikes.brand === params.brand);
    if (bikesListData) {
      setBikesList(bikesListData.models);
      setBrandImg(bikesListData['brand-img']);
      setBackgroundImg(bikesListData['background-img']);
      setSBGimg1(bikesListData['S-BG-img1'])
      setSBGimg2(bikesListData['S-BG-img2'])
      setDesc1(bikesListData['description1'])
      setDesc2(bikesListData['description2'])
    }
  }, [params.brand]);

  function switchDisplay() {
    if(!switchPane) {
      setSwitchPane(true)
    }
    else {
      setSwitchPane(false)
    }
  }

  function switchDisplay2() {
    if(!switchPane2) {
      setSwitchPane2(true)
    }
    else {
      setSwitchPane2(false)
    }
  }

  return (
    <div>
      {
        brandImg &&
          <div>
            <div className={BikesListCss.brandImg}>
              <img src={process.env.PUBLIC_URL + '/img/brands-icons/' + brandImg}></img>
            </div>

            <div className={BikesListCss.backgroundImgContainer}>
              <div className={BikesListCss.backgroundImg}>
                <img src={process.env.PUBLIC_URL + '/img/BikeLists-Background/' + backgroundImg}></img>
              </div>
            </div>
          </div>
      }

      {
        SBGimg1 && 
          <div className={BikesListCss.bikesListBlock}>

            
            <div className={BikesListCss.blockOne}>
              
              <div className={BikesListCss.sbg} onClick={switchDisplay}>
                <img src={process.env.PUBLIC_URL + '/img/BikeLists-small-Background/' + SBGimg1}></img>
              </div>

              <div className={BikesListCss.bikesList}>

                <h3 className={BikesListCss.blockTitle} onClick={switchDisplay}>{bikesList[0]['models-type'] + ' >'}</h3>
                {
                  switchPane &&
                    <div className={BikesListCss.modelDesc}>
                      <p>{desc1}</p>
                    </div>
                }
                
                {
                  !switchPane &&
                    <Swiper
                      className='bikeListSwiper'
                      slidesPerView={3}
                      scrollbar={{
                        hide: true,
                      }}
                      modules={[Scrollbar]}
                    >
                      <SwiperSlide>
                        <Link to={'/bikeSpecs/' + params.brand + '/0'}>
                          <div className='bikeListContainer'>
                            <img src={process.env.PUBLIC_URL + '/img/' + params.brand + '/' + bikesList[0]['img']}></img>
                            <p>{bikesList[0]['name']}</p>
                            
                          </div>
                        </Link>
                      </SwiperSlide>

                      <SwiperSlide>
                        <Link to={'/bikeSpecs/' + params.brand + '/1'}>
                          <div className='bikeListContainer'>
                            <img src={process.env.PUBLIC_URL + '/img/' + params.brand + '/' + bikesList[1]['img']}></img>
                            <p>{bikesList[1]['name']}</p>
                            
                          </div>
                        </Link>
                      </SwiperSlide>

                      <SwiperSlide>
                      <Link to={'/bikeSpecs/' + params.brand + '/2'}>
                        <div className='bikeListContainer'>
                            <img src={process.env.PUBLIC_URL + '/img/' + params.brand + '/' + bikesList[2]['img']}></img>
                            <p>{bikesList[2]['name']}</p>
                            
                        </div>
                      </Link>
                      </SwiperSlide>

                      <SwiperSlide>
                      <Link to={'/bikeSpecs/' + params.brand + '/3'}>
                        <div className='bikeListContainer'>
                          <img src={process.env.PUBLIC_URL + '/img/' + params.brand + '/' + bikesList[3]['img']}></img>
                          <p>{bikesList[3]['name']}</p>
                          
                        </div>
                      </Link>
                        
                      </SwiperSlide>

                      <SwiperSlide>
                      <Link to={'/bikeSpecs/' + params.brand + '/4'}>
                        <div className='bikeListContainer'>
                          <img src={process.env.PUBLIC_URL + '/img/' + params.brand + '/' + bikesList[4]['img']}></img>
                          <p>{bikesList[4]['name']}</p>
                          
                        </div>
                      </Link>
                      </SwiperSlide>
                    </Swiper>
                }
                
              </div>

            </div>
            
            <div className={BikesListCss.blockTwo}>

              <div className={BikesListCss.sbg} onClick={switchDisplay2}>
                <img src={process.env.PUBLIC_URL + '/img/BikeLists-small-Background/' + SBGimg2}></img>
              </div>

              <div className={BikesListCss.bikesList}>

                <h3 className={BikesListCss.blockTitle} onClick={switchDisplay2}>{bikesList[5]['models-type'] + ' >'}</h3>
                
                {
                  switchPane2 &&
                    <div className={BikesListCss.modelDesc}>
                      <p>{desc2}</p>
                    </div>
                }

                {
                  !switchPane2 &&  
                    <Swiper
                      className='bikeListSwiper'
                      slidesPerView={3}
                      scrollbar={{
                        hide: true,
                      }}
                      modules={[Scrollbar]}
                    >
                      <SwiperSlide>
                      <Link to={'/bikeSpecs/' + params.brand + '/5'}>
                        <div className='bikeListContainer'>
                            <img src={process.env.PUBLIC_URL + '/img/' + params.brand + '/' + bikesList[5]['img']}></img>
                            <p>{bikesList[5]['name']}</p>
                            
                        </div>
                      </Link>
                      </SwiperSlide>

                      <SwiperSlide>
                      <Link to={'/bikeSpecs/' + params.brand + '/6'}>
                        <div className='bikeListContainer'>
                            <img src={process.env.PUBLIC_URL + '/img/' + params.brand + '/' + bikesList[6]['img']}></img>
                            <p>{bikesList[6]['name']}</p>
                            
                        </div>
                      </Link>
                      </SwiperSlide>

                      <SwiperSlide>
                      <Link to={'/bikeSpecs/' + params.brand + '/7'}>
                        <div className='bikeListContainer'>
                            <img src={process.env.PUBLIC_URL + '/img/' + params.brand + '/' + bikesList[7]['img']}></img>
                            <p>{bikesList[7]['name']}</p>
                            
                        </div>
                      </Link>
                      </SwiperSlide>

                      <SwiperSlide>
                      <Link to={'/bikeSpecs/' + params.brand + '/8'}>
                        <div className='bikeListContainer'>
                            <img src={process.env.PUBLIC_URL + '/img/' + params.brand + '/' + bikesList[8]['img']}></img>
                            <p>{bikesList[8]['name']}</p>
                            
                        </div>
                      </Link>
                          
                      </SwiperSlide>

                      <SwiperSlide>
                      <Link to={'/bikeSpecs/' + params.brand + '/9'}>
                        <div className='bikeListContainer'>
                            <img src={process.env.PUBLIC_URL + '/img/' + params.brand + '/' + bikesList[9]['img']}></img>
                            <p>{bikesList[9]['name']}</p>
                            
                        </div>
                      </Link>
                      </SwiperSlide>
                    </Swiper>
                }
                 
              </div>

            </div>
        
          </div>
      } 
    </div>
  )
}
