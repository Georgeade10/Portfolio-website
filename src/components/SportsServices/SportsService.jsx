import React from 'react';
import { sportsServices } from '../../Data';
import { FaArrowRight } from 'react-icons/fa';

import { Link } from 'react-scroll';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

import './SportsService.css';

const SportsServices = () => {
  return (
    <section className='services section' id='sportsService'>
      <h2 className='section__title text-cs'>What I Do</h2>
      <p className='section__subtitle'>
        Sports <span>Services</span>
      </p>

      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className='services__container container mySwiper'
      >
        {sportsServices.map(({ name, title, description }, index) => {
          return (
            <SwiperSlide className='services__item card card-one' key={index}>
              <span className='services__subtitle text-cs'>{name}</span>

              <h3 className='services__title'>{title}</h3>
              <p className='services__description'>{description}</p>

              <Link
                className='link'
                to='pricing'
                spy={true}
                hashSpy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                See Pricing
                <FaArrowRight className='link__icon'></FaArrowRight>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className='section__deco deco__right'></div>

      <div className='section__bg-wrapper'>
        <span className='bg__title'>Services</span>
      </div>
    </section>
  );
};

export default SportsServices;
