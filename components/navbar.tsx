import styles from '@/app/page.module.css';
import Button from './button';

export default function Navbar() {
  return (
    <div className={styles.nav}>
      <Button text={'Try now!'} type="secondary" />
    </div>
  );
}
