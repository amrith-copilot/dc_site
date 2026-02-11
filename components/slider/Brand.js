import React from 'react';
import SwiperCore, { Autoplay, Navigation,Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation,Pagination]);
const Brand = () => {

    const data = [
        { img: "placed.png" },
        { img: "cuebiq.png" },
        { img: "factual.png" },
        { img: "placeiq.png" },
        { img: "airmeet.png" },
        { img: "spen.png" },
        { img: "klippa.png" },
        { img: "matrix.png" }
    ];


    return (
        <>
            <Swiper
                slidesPerView={8}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                freeMode={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 8,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper pt-5 pb-50"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="swiper-slide">
                        <a href="#"><img src={`assets/imgs/page/homepage1/${item.img}`} alt="Genz" /></a>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="swiper-nav-style-3">
                <button className="swiper-button-prev-style-3" aria-label="Previous" type="button">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M18 12 H8 M12 6 L6 12 L12 18" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <button className="swiper-button-next-style-3" aria-label="Next" type="button">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M6 12 H16 M12 6 L18 12 L12 18" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            <style jsx>{`
                .swiper-nav-style-3 {
                    display:flex;
                    gap:12px;
                    justify-content:center;
                    margin-top:16px;
                }
                .swiper-nav-style-3 button {
                    width:44px;
                    height:44px;
                    border-radius:50%;
                    border:1px solid #e6e6e6;
                    background:#fff;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    box-shadow:0 1px 3px rgba(0,0,0,0.06);
                    padding:0;
                    cursor:pointer;
                }
                .swiper-nav-style-3 button:hover{ transform:scale(1.05); }
            `}</style>
        </>
    );
};

export default Brand;
 

