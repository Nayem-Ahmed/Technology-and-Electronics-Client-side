import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './banner.css';
// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

import bg1 from '../assets/bg1.webp'
import bg2 from '../assets/bg2.webp'



const Banner = () => {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'backgroundImage':
                            'url()',
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="mb-1 font-bold text-2xl " data-swiper-parallax="-300">
                        SAMSUNG GEAR VR<br></br>
                        WITH CONTROLLER
                    </div>
                    <div className=" " data-swiper-parallax="-200">
                        Get the Gear VR with Controller for free with<br></br> pre-oder of Galaxy S8 or Galaxy S8+


                    </div>

                </SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="mb-3 font-bold text-2xl" data-swiper-parallax="-300">
                        SMALL SPEAKER <br></br>BIG SOUND
                    </div>
                    <div className=" " data-swiper-parallax="-200">
                        The World’s Thinnest Bluetooth Speaker<br></br> Just $24.95


                    </div>

                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;