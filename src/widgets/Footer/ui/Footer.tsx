/* eslint-disable react/no-unescaped-entities */
import { memo } from 'react';

import { Container, Text } from '@/shared/ui';

import styles from './Footer.module.scss';

export const Footer = memo(function Footer() {
  return (
    <footer className={styles.footer}>
      <Container center className={styles.container}>
        <Text align="right">© {new Date().getFullYear()} ИП "Горяный"</Text>
      </Container>
    </footer>
  );
});
