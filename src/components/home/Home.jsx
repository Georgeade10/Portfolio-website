import React from 'react';
import profileImg from '../../assets/profile-img.png';

import { Link } from 'react-scroll';

import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import CV from '../../assets/George_Adeola-BusinessAnalyst.pdf';
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
            <b>Football Analyst | Full Stack Developer | Business Analyst </b>
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
                7 <b>+</b>
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
           As an accomplished business analyst and full-stack web developer, complemented by a seasoned role as a pro-level scouting analyst with a FIFA licensed agent, I excel in the art of analysis across technology, sports, and business domains. My proficiency extends to unraveling complexities in software development and dissecting player and team profiles within the dynamic football industry. Leveraging data analytics tools like Python and Tableau, I orchestrate seamless integration of technology, sports insights, and business strategies.
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
