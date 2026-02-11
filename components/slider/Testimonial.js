import React from 'react';
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Testimonial = () => {

    const data = [
        {
            img: "1.webp",
        },
        {
            img: "2.webp",
        },
        {
            img: "3.webp",
        },
        {
            img: "4.webp",
        },
        {
            img: "5.webp",
        },
    ];


    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                navigation={{
                    prevEl: ".swiper-button-prev-style-3",
                    nextEl: ".swiper-button-next-style-3",
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    575: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    767: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    991: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1199: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1350: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                className="swiper-wrapper"
            >
                {data.map((item, i) => (
                    <SwiperSlide className="swiper-slide">
                        <div className="card-testimonial-grid">
                            <div className="box-author mb-10"><a href="#"><img src="assets/imgs/page/homepage1/author.png" alt="iori" /></a>
                                <div className="author-info"><a href="#"><span className="font-md-bold color-brand-1 author-name">Guy Hawkins</span></a><span className="font-xs color-grey-500 department">Bank of America</span></div>
                            </div>
                            <p className="font-md color-grey-500">Access the same project through five different dynamic views: a kanban board, Gantt chart, spreadsheet, calendar or simple task list. When team members can choose the work style that suits them best, productivity and engagement skyrocket. Maecenas lobortis risus.</p>
                            <div className="card-bottom-info"><span className="font-xs color-grey-500 date-post">29 November 2022</span>
                                <div className="rating text-end"><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /><img src="assets/imgs/template/icons/star.svg" alt="iori" /></div>
                            </div>
                        </div>
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
                .swiper-nav-style-3 { display:flex; gap:12px; justify-content:center; margin-top:16px; }
                .swiper-nav-style-3 button { width:44px; height:44px; border-radius:50%; border:1px solid #e6e6e6; background:#fff; display:flex; align-items:center; justify-content:center; box-shadow:0 1px 3px rgba(0,0,0,0.06); padding:0; cursor:pointer; }
                .swiper-nav-style-3 button:hover{ transform:scale(1.05); }
            `}</style>



        </>
    );
};

export default Testimonial;

