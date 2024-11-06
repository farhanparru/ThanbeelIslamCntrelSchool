// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Scrollbar, Mousewheel, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const photos_b = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScE0R9BOaJ6btifl4KDOpynjbXjwTdh_v1gQ&s',
  'https://www.mescentralschoolcalicut.com/wp-content/uploads/2023/05/intro-img.png',
  'https://akshardhamgroup.com/images/menu-1-370x278.webp',
  'https://akshardhamgroup.com/images/menu-2-370x278.webp',
  'https://shcsvpm.com/images/gallery/4.jpg',
  'https://www.shcsvpm.com/images/about/sc01.jpg',
];

const Slider = () => {
    return (
        <section className="pt-[7rem] pb-[2rem] bg-rose-100">
          <div className="xl:mx-auto max-w-6xl mx-[1.5rem]">
            <h1 className="text-[2rem] sm:text-[3rem] font-bold mb-[2rem] text-center">
             Latest Updates
            </h1>
            <Swiper
              modules={[Scrollbar, Mousewheel, Autoplay]}
              loop={true}
              pagination={{ clickable: true }}
              centeredSlides={true}
              grabCursor={true}
              scrollbar={{ draggable: true }}
              mousewheel={{
                invert: false,
              }}
              autoplay={{
                delay: 5000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  spaceBetween: 10,
                  slidesPerView: 1,
                },
                480: {
                  spaceBetween: 15,
                  slidesPerView: 2,
                },
                768: {
                  spaceBetween: 20,
                  slidesPerView: 3,
                },
                1024: {
                  spaceBetween: 25,
                  slidesPerView: 4,
                },
                1280: {
                  spaceBetween: 30,
                  slidesPerView: 5,
                },
              }}
              className="breakpoint"
            >
              {photos_b.map((p, index) => (
                <SwiperSlide key={index}>
                  <img className="w-full h-auto object-cover rounded-lg" src={p} alt={`Slide ${index + 1}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
    );
};

export default Slider;
