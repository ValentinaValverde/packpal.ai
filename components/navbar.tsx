import styles from '@/app/page.module.css';
import Button from './button';
import Image from 'next/image';
import Logo from '@/public/packpal-logo.svg';

export default function Navbar() {
  return (
    <div className={styles.nav}>
      {/* <p style={{ color: 'var(--white)', fontSize: 20 }}>PackPal.AI</p> */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Image src={Logo} alt="Logo" style={{ width: 50, height: 'auto' }} />
        <p
          style={{
            color: 'var(--white)',
            fontFamily: 'OstrichSans',
            fontSize: 30,
            marginTop: 5,
          }}
        >
          PACKPAL.AI
        </p>
      </div>
      <Button
        text={'Contact Us!'}
        type="secondary"
        link="mailto:hunter@chipp.ai"
      />
    </div>
  );
}
