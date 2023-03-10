import React, { FC } from 'react';
import styles from './Header.module.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <header className={styles.Header}>
    Header Component
  </header>
);

export default Header;
