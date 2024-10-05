import Image from 'next/image';
import styles from './page.module.css';
import Logo from '../public/packpal-logo.svg';

export default function Home() {
  return (
    <div className={styles.main}>
      <Image
        src={Logo}
        alt="Pack Pal Logo"
        style={{ width: 300, height: 'auto' }}
      />
    </div>
  );
}
