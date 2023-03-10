import React, { FC,ReactNode } from 'react';
import styles from './Dessert.module.scss';

interface DessertProps {
  name:string;
  price:number;
  children: ReactNode
}

const Dessert: FC<DessertProps> = ({name,price,children}) => (
  <div className={styles.Dessert}>
    <span>Name: {name} </span>
    <span>Price: {price} </span>
    {children}
  </div>
);

export default Dessert;
