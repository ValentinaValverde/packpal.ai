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
  // const buttonClass = type === 'primary' ? styles.primary_button : styles.secondary_button;
  //
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
