import styles from '@/app/page.module.css';
import PlaceholderImage from '@/public/packpal-logo.svg';
import Spacer from '@/components/spacer';
import Image from 'next/image';

export default function InfoCard({
  photo,
  title,
  text,
}: {
  photo?: string;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.card}>
      <div>
        <Image
          src={photo || PlaceholderImage}
          alt="Card Image"
          // style={{ width: 100, height: 'auto' }}
        />
      </div>
      <div>
        <p className={styles.large_text}>{title}</p>
        <Spacer height={5} />
        <p>{text}</p>
      </div>
    </div>
  );
}
