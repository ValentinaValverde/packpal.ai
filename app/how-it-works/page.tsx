import styles from '@/app/page.module.css';
// import InfoCard from '@/components/info-card';
import Spacer from '@/components/spacer';
import Image from 'next/image';
import PlaceholderImage from '@/public/packpal-logo.svg';
import Logo from '@/public/packpal-full.svg';
import Button from '@/components/button';

export default function Page() {
  return (
    <div style={{ marginTop: 100 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
        }}
      >
        <div style={{ maxWidth: 700 }}>
          <p className={styles.large_text}>How it Works</p>
          <Spacer height={30} />

          <div className={styles.card}>
            <div>
              <Image
                src={PlaceholderImage}
                alt="Card Image"
                // style={{ width: 100, height: 'auto' }}
              />
            </div>
            <div>
              <p className={styles.large_text}>Step 1</p>
              <Spacer height={5} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt, ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <div>
              <p className={styles.large_text}>Step 2</p>
              <Spacer height={5} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt, ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <Image
                src={PlaceholderImage}
                alt="Card Image"
                // style={{ width: 100, height: 'auto' }}
              />
            </div>
          </div>

          <div className={styles.card}>
            <div>
              <Image
                src={PlaceholderImage}
                alt="Card Image"
                // style={{ width: 100, height: 'auto' }}
              />
            </div>
            <div>
              <p className={styles.large_text}>Step 3</p>
              <Spacer height={5} />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt, ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Spacer height={100} />

      <div className={styles.end}>
        <Image
          src={Logo}
          alt="Pack Pal Logo"
          style={{ width: 300, height: 'auto' }}
        />
        <Spacer height={0} />
        <p style={{ textAlign: 'center', color: 'var(--white)' }}>
          Add Some
          <span className={styles.red_text}> Magic </span>
          to Your Process
        </p>
        <Spacer height={0} />
        <Button
          text={'Contact us!'}
          type="secondary"
          link="mailto:hunter@chipp.ai"
        />
      </div>
    </div>
  );
}
