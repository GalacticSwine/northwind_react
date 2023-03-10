import React, { FC } from 'react';
import Discount from '../../../HomeArea/Discount/Discount';
import styles from './Main.module.scss';

interface MainProps {}

const Main: FC<MainProps> = () => (
  <main className={styles.Main}>
    {/* interpolation */}
    <Discount/>
  </main>
);

export default Main;
