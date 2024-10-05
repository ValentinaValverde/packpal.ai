import styles from '@/app/page.module.css';
import Button from './button';

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <p style={{ color: 'var(--white)', fontSize: 20 }}>PackPal.AI</p>
      <Button text={'Try now!'} type="secondary" />
    </div>
  );
}
