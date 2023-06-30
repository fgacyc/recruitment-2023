import './home.css'
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function Home() {
    useEffect(() => {
        disableScroll();
        return () => {
            enableScroll();
        };
    }, []);

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
        document.body.style.overflow = 'auto';
    };

    const handleButtonClick = () => {
        enableScroll();
        scrollToLandingInfo();
    };

    const scrollToLandingInfo = () => {
        const landingInfo = document.getElementById('landing-info-1');
        landingInfo.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <section id='landing' className='flex flex-col justify-between align-center'>
                <img src="../src/images/CYC_logo.png" alt="CYC Logo" id='cyc-logo' className='mt-45' />
                <img src="../src/images/KV_title.png" alt="Landing Title" />
                <button className='mb-45' onClick={handleButtonClick}>开启你的服事旅程</button>
            </section>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <section id='landing-info-1' className='flex flex-col align-center justify-between'>
                        <div className="overlay"></div>
                        <img src="../src/images/CYC_logo.png" alt="CYC Logo" id='cyc-logo' className='mt-45 relative' />
                        <div className='text-center padding-y-45 mb-75 relative'>
                            <h1>像一家人一样不遗余力地彼此服事</h1>
                            <h6>
                                教会是神赐给我们的属灵大家庭，
                                在这个大家庭里的每个人都有责任付出和给予，
                                就像一家人那样不遗余力地彼此服事。
                            </h6>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section id='landing-info-2' className='flex flex-col align-center justify-between'>
                        <div className="overlay"></div>
                        <img src="../src/images/CYC_logo.png" alt="CYC Logo" id='cyc-logo' className='mt-45 relative' />
                        <div className='text-center padding-y-45 mb-75 relative'>
                            <h1>​​加入事工基本条件</h1>
                            <div className='flex align-center mt-15'>
                                <img src="../src/icons/tick.svg" alt="Tick" className='tick-icon' />
                                <h6 className='FZChaoCuHei font-weight-400'>委身参加小组及聚会至少3个月</h6>
                            </div>
                            <div className='flex align-center mt-15'>
                                <img src="../src/icons/tick.svg" alt="Tick" className='tick-icon' />
                                <h6 className='FZChaoCuHei font-weight-400'>完成装备课程 MSJ 1、2、3</h6>
                            </div>
                            <div className='flex align-center mt-15'>
                                <img src="../src/icons/tick.svg" alt="Tick" className='tick-icon' />
                                <h6 className='FZChaoCuHei font-weight-400'>有牧养领袖的支持和推荐</h6>
                            </div>
                            <div className='flex align-center mt-15'>
                                <img src="../src/icons/tick.svg" alt="Tick" className='tick-icon' />
                                <h6 className='FZChaoCuHei font-weight-400'>愿意被塑造以及与团队配搭</h6>
                            </div>
                        </div>
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section id='landing-info-3' className='flex flex-col align-center justify-between'>
                        <div className="overlay"></div>
                        <img src="../src/images/CYC_logo.png" alt="CYC Logo" id='cyc-logo' className='mt-45 relative' />
                        <div className='text-center padding-y-45 mb-75 relative'>
                            <h1>共同建造这个爱的属灵大家庭</h1>
                            <h6>
                                今天就找出最能发挥你自己的强处，
                                或是你最有兴趣的事工，
                                使用神给你的一切来服事祂和其他人的需要。
                            </h6><br />
                            <h6>我们不是要寻找完美的家，
                                而是我们共同建造这个爱的属灵大家庭！
                            </h6>
                        </div>
                    </section>
                </SwiperSlide>
            </Swiper>
        </>
    )
}