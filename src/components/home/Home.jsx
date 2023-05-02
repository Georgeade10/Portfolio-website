import React from 'react';
import profileImg from '../../assets/profile-img.png';

import { Link } from 'react-scroll';

import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import CV from '../../assets/GeorgeAdeola__Fullstack-en.pdf';
import Sports_CV from '../../assets/GEORGEADEOLA-FIFAAGENTen.pdf';
import './home.css';

const Home = () => {
  const openPdfInNewTab = () => {
    window.open(CV, '_blank');
  };
  const openSportPdfInNewTab = () => {
    window.open(Sports_CV, '_blank');
  };
  return (
    <section className='home' id='home'>
      <div className='home__wrapper'>
        <div className='home__container container'>
          <h1 className='home__title text-cs'>
            <span>George</span> Adeola
          </h1>

          <p className='home__job'>
            <b>FIFA Licensed Agent | Full Stack Developer | CMO </b>
          </p>

          <div className='home__img-wrapper'>
            <div className='home__banner'>
              <img
                src={profileImg}
                alt=''
                className='home__profile'
                style={{ marginLeft: '90px' }}
              />
            </div>

            <p className='home__data home__data-one'>
              <span className='text-lg'>
                5 <b>+</b>
              </span>

              <span className='text-sm text-cs'>
                Years of combined <span>Experience</span>
              </span>
            </p>

            <p className='home__data home__data-two'>
              <span className='text-lg'>
                100 <b>+</b>
              </span>

              <span className='text-sm text-cs'>
                Completed <span>Projects</span>
              </span>
            </p>
          </div>

          <p className='home__text'>
            As a FIFA licensed agent, full stack developer, and CMO, I bring a
            unique and diverse set of skills to the table. With extensive
            knowledge and experience in the sports industry, coupled with
            expertise in technology and marketing, I am equipped to provide
            comprehensive services to my clients. Whether you are looking for
            support in player negotiations, web development, or marketing
            strategies, I am dedicated to helping you achieve your goals.Let me
            be your one-stop-shop for all your sports, tech, and marketing
            related needs.
          </p>

          <div className='home__socials'>
            <a
              href='https://www.linkedin.com/in/georgeadeola/'
              target='_blank'
              className='home__social-link'
            >
              <FaLinkedinIn />
            </a>

            <a
              href='https://github.com/Georgeade10'
              target='_blank'
              className='home__social-link'
            >
              <FaGithubAlt />
            </a>
          </div>

          <div className='home__btns'>
            <button onClick={openSportPdfInNewTab} className='btn text-cs'>
              Sports CV
            </button>
            <Link
              className='hero__link text-cs'
              to='SportsSkills'
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Sports Skills
            </Link>
            <button onClick={openPdfInNewTab} className='btn text-cs'>
              Tech CV
            </button>
            <Link
              className='hero__link text-cs'
              to='skills'
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              Tech Skills
            </Link>
          </div>
        </div>

        <div className='section__deco deco__left'></div>
      </div>

      <div className='section__bg-wrapper'>
        <span className='bg__title'>Web Developer</span>
      </div>
    </section>
  );
};

export default Home;
