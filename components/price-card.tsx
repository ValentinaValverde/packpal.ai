import styles from '@/app/page.module.css';
import Spacer from '@/components/spacer';

export default function PriceCard({
  price,
  title,
  text,
}: {
  price: string | number;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.price_card}>
      <p className={styles.large_text_brown}>${price}</p>
      <Spacer height={10} />
      <h2>{title}</h2>
      <Spacer height={10} />
      <p>{text}</p>
    </div>
  );
}
