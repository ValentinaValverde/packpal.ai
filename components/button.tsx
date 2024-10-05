import styles from '@/app/page.module.css';

export default function Button({
  link,
  text,
  type = 'primary',
}: {
  link?: string;
  text: string;
  type?: 'primary' | 'secondary';
}) {
  // document?.querySelector('#chat')?.scrollTo({
  //   behavior: 'smooth',
  // });

  return (
    <a href={link}>
      {type === 'primary' ? (
        <button className={styles.primary_button}>{text}</button>
      ) : (
        <button className={styles.secondary_button}>{text}</button>
      )}
    </a>
  );
}
