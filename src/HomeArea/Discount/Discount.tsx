import React, { FC } from 'react';
import styles from './Discount.module.scss';

interface DiscountProps {}

const Discount: FC<DiscountProps> = () => {

  let percent = 10;

  return (

    <div className={`box ${styles.Discount}`}>


    <span>Only now - {percent}% discount on all products!</span>
  </div>
  )


}

export default Discount;
