"use client"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation } from "swiper/modules"
import { MdSkipPrevious, MdSkipNext } from "react-icons/md"
import { X } from "lucide-react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import type { SwiperModule } from "swiper/types"
import type { Swiper as SwiperType } from "swiper"
import "@/app/[locale]/components/styles/slide.css"

type Image = {
  src: string
  alt?: string
}

type SwiperConfig = {
  effect?: string
  grabCursor?: boolean
  centeredSlides?: boolean
  loop?: boolean
  slidesPerView?: number
  coverflowEffect?: {
    rotate?: number
    stretch?: number
    depth?: number
    modifier?: number
    slideShadows?: boolean
  }
  navigation?: {
    nextEl?: string
    prevEl?: string
    clickable?: boolean
  }
  modules?: SwiperModule[]
}

type SlideProps = {
  images: Image[]
  swiperConfig?: SwiperConfig
  initialSlideIndex?: number
}

const Slide: React.FC<SlideProps> = ({ images = [], swiperConfig = {}, initialSlideIndex = 0 }) => {
  const [popupOpen, setPopupOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(initialSlideIndex)
  const swiperRef = useRef<SwiperType | null>(null)
  const initializedRef = useRef(false)

  const defaultConfig = {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 1,
    initialSlide: initialSlideIndex,
    coverflowEffect: {
      rotate: 0,
      stretch: -75,
      depth: 250,
      modifier: 3.5,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      clickable: true,
    },
    modules: [EffectCoverflow, Navigation],
    ...swiperConfig,
  }

  useEffect(() => {
    if (swiperRef.current && !initializedRef.current) {
      const timer = setTimeout(() => {
        if (swiperRef.current) {
          swiperRef.current.slideTo(initialSlideIndex, 0)
          initializedRef.current = true
        }
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [initialSlideIndex])

  const handleSlideClick = (index: number) => {
    if (swiperRef.current && swiperRef.current.realIndex === index) {
      setActiveIndex(index)
      setPopupOpen(true)
    }
  }

  return (
    <div className="slider-container relative">
      <Swiper
        {...defaultConfig}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          swiper.slideTo(initialSlideIndex, 0)
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex)
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 3,
          },
        }}
        className="relative"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="w-[80vw] cursor-pointer"
            onClick={() => handleSlideClick(index)}
            data-index={index} 
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt || `slide-${index}`}
              className="h-[60vh] object-cover"
            />
            <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded">{index}</div>
          </SwiperSlide>
        ))}

        <div className="slider-controls absolute inset-0 flex items-center justify-between z-10 pointer-events-none px-4">
          <button className="swiper-button-prev flex items-center justify-center w-12 h-12 rounded-full bg-black/50 text-white pointer-events-auto transition-all hover:bg-black/70">
            <MdSkipPrevious className="text-3xl" />
          </button>
          <button className="swiper-button-next flex items-center justify-center w-12 h-12 rounded-full bg-black/50 text-white pointer-events-auto transition-all hover:bg-black/70">
            <MdSkipNext className="text-3xl" />
          </button>
        </div>
      </Swiper>

      {popupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full">
            <button
              onClick={() => setPopupOpen(false)}
              className="absolute right-4 top-4 z-10 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-all"
            >
              <X size={24} />
            </button>

            <Swiper
              initialSlide={activeIndex}
              navigation={{
                nextEl: ".popup-next",
                prevEl: ".popup-prev",
              }}
              modules={[Navigation]}
              loop={true}
              className="w-full"
            >
              {images.map((image, index) => (
                <SwiperSlide key={`popup-${index}`} className="flex items-center justify-center">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt || `popup-slide-${index}`}
                    className="max-h-[80vh] max-w-full object-contain"
                  />
                  <div className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded">{index}</div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="absolute inset-0 flex items-center justify-between z-10 pointer-events-none px-4">
              <button className="popup-prev flex items-center justify-center w-14 h-14 rounded-full bg-black/50 text-white pointer-events-auto transition-all hover:bg-black/70">
                <MdSkipPrevious className="text-4xl" />
              </button>
              <button className="popup-next flex items-center justify-center w-14 h-14 rounded-full bg-black/50 text-white pointer-events-auto transition-all hover:bg-black/70">
                <MdSkipNext className="text-4xl" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Slide
