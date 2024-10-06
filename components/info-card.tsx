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
      <div
        style={{ position: 'relative', minWidth: '329px', minHeight: '314px' }}
      >
        <Image
          src={photo || PlaceholderImage}
          alt="Card Image"
          fill
          objectFit="cover"
          style={{
            borderRadius: '10px',
            border: '8px solid var(--brown)',
            boxShadow: '5px 5px 0px #897668',
          }}
        />
      </div>
      <div>
        <Spacer height={20} />

        <p className={styles.large_text}>{title}</p>
        <Spacer height={5} />
        <p>{text}</p>
        <Spacer height={50} />
      </div>
    </div>
  );
}
