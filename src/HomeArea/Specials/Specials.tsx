import React, { FC } from 'react';
import styles from './Specials.module.scss';

interface SpecialsProps {}

const Specials: FC<SpecialsProps> = () => {

  const isWeekend = () => {
    
    const now = new Date();
    const day = now.getDay() +1
    return day >= 6;
  
  }

  const isTuesdayOrFriday = () => {
    
    const now = new Date();
    const day = now.getDay() +1;
    return day === 3 || day === 6;

  }



  return (
    
    <div className={`box ${styles.Specials}`}>
    
    <span>Our Specials: </span>
    {isWeekend() ? <span>Fish</span> : <span>Pasta</span>}
  </div>
  )
};

export default Specials;
