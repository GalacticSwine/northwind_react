import React, { FC } from 'react';
import Discount from '../../../HomeArea/Discount/Discount';
import Specials from '../../../HomeArea/Specials/Specials';
import Desserts from '../../../HomeArea/Desserts/Desserts';
import Recommendations from '../../../HomeArea/Recommendations/Recommendations';
import styles from './Main.module.scss';

interface MainProps {}

const Main: FC<MainProps> = () => (
  <main className={styles.Main}>
    {/* interpolation */}
    <Discount/>
    {/* conditional rendering */}
    <Specials/>
    {/* lists */}
    <Desserts/>

    <Recommendations/>




  </main>
);

export default Main;
