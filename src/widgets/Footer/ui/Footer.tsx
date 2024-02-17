/* eslint-disable react/no-unescaped-entities */
import { Container, Text } from '@/shared/ui';

import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={styles.footer}>
    <Container center className={styles.container}>
      <Text align="right">© {new Date().getFullYear()} ИП "Горяный"</Text>
    </Container>
  </footer>
);
