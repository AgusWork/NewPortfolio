"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { SwiperModule } from 'swiper/types';
import "@/app/[locale]/components/styles/slide.css"

type Image = {
    src: string;
    alt?: string;
};

type SwiperConfig = {
    effect?: string;
    grabCursor?: boolean;
    centeredSlides?: boolean;
    loop?: boolean;
    slidesPerView?: number;
    coverflowEffect?: {
        rotate?: number;
        stretch?: number;
        depth?: number;
        modifier?: number;
        slideShadows?: boolean;
    };
    navigation?: {
        nextEl?: string;
        prevEl?: string;
        clickable?: boolean;
    };
    modules?: SwiperModule[];
};

type SlideProps = {
    images: Image[];
    swiperConfig?: SwiperConfig;
};

const Slide: React.FC<SlideProps> = ({
    images = [],
    swiperConfig = {},
}) => {
    const defaultConfig = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 3,
        coverflowEffect: {
            rotate: 0,
            stretch: -75,
            depth: 250,
            modifier: 3.5,
            slideShadows: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
        },
        modules: [EffectCoverflow, Navigation],
        ...swiperConfig,
    };

    return (
        <div className='slider-container'>
            <Swiper {...defaultConfig}>
                {images.map((image, index) => (
                    <SwiperSlide key={index} className=''>
                        <img src={image.src} alt={image.alt || `slide-${index}`} className='h-[60vh] w-full' />
                    </SwiperSlide>
                ))}

                <div className='slider-controler'>
                    <div className='swiper-button-prev'>
                        <MdSkipPrevious />
                    </div>
                    <div className='swiper-button-next'>
                        <MdSkipNext /> 
                    </div>
                </div>
            </Swiper>
        </div>
    );
};

export default Slide;