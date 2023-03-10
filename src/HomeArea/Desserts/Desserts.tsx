import React, { FC } from 'react';
import Dessert from './Dessert/Dessert';
import styles from './Desserts.module.scss';

interface DessertsProps {}

const Desserts: FC<DessertsProps> = () => {

const items = [
  {id:1,name:"ice cream",price:10},
  {id:2,name:"cake",price:20},
  {id:3,name:"muffins",price:30},
  {id:4,name:"oreo",price:40},
  {id:5,name:"brownies",price:50}
]


const jsxItems = items.map((item) => {
  const {id,name,price} = item
  return (
    <Dessert name={name} price={price} key={id}>
      This is some content and description
    </Dessert>
  )
})

return (
  <div className={`box ${styles.Desserts}`}>
    Desserts Component
    {jsxItems}
 </div>
)


}
export default Desserts;
