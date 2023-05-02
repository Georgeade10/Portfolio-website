import React from 'react';
import { sportsSkills } from '../../Data';
import './SportsSkills.css';

const SportsSkills = () => {
  return (
    <section className='skills section' id='SportsSkills'>
      <h2 className='section__title text-cs'>Sports Skills</h2>
      <p className='section__subtitle'>
        My <span>Talent</span>
      </p>

      <div className='skills__container container grid'>
        {sportsSkills.map(({ name, percentage, description }, index) => {
          return (
            <div className='skills__item' key={index}>
              <div className='skills__titles'>
                <h3 className='skills__name'>{name}</h3>
                <span className='skills__number'>
                  {percentage} <span>%</span>
                </span>
              </div>

              <p className='skills__description'>{description}</p>

              <div className='skills__bar'>
                <span
                  className='skills__percentage'
                  style={{ width: `${percentage}%` }}
                >
                  <span></span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className='section__deco deco__left'></div>

      <div className='section__bg-wrapper'>
        <span className='bg__title'>Skills</span>
      </div>
    </section>
  );
};

export default SportsSkills;
