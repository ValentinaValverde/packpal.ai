import styles from '@/app/page.module.css';
// import InfoCard from '@/components/info-card';
import Spacer from '@/components/spacer';
import Image from 'next/image';
import PlaceholderImage from '@/public/placeholder-img.png';
import Logo from '@/public/packpal-full.svg';
import Button from '@/components/button';

export default function Page() {
  return (
    <>
      <div className={styles.main}>
        <div style={{ maxWidth: 500 }}>
          <h1 style={{ fontSize: 50 }}>How it Works</h1>
          <Spacer height={10} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt, ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
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
            <Spacer height={30} />

            <div className={styles.card}>
              <div>
                <Image
                  src={PlaceholderImage}
                  alt="Card Image"
                  style={{
                    borderRadius: '10px',
                    border: '8px solid var(--brown)',
                    boxShadow: '5px 5px 0px #897668',
                  }}
                />
              </div>
              <div>
                <p className={styles.large_text}>Step 1</p>
                <Spacer height={5} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt, ut labore et dolore magna
                  aliqua.
                </p>
              </div>
            </div>
            <Spacer height={50} />

            <div className={styles.reverse_card}>
              <div>
                <p className={styles.large_text}>Step 2</p>
                <Spacer height={5} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt, ut labore et dolore magna
                  aliqua.
                </p>
              </div>
              <div>
                <Image
                  src={PlaceholderImage}
                  alt="Card Image"
                  style={{
                    borderRadius: '10px',
                    border: '8px solid var(--brown)',
                    boxShadow: '5px 5px 0px #897668',
                  }}
                />
              </div>
            </div>
            <Spacer height={50} />

            <div className={styles.card}>
              <div>
                <Image
                  src={PlaceholderImage}
                  alt="Card Image"
                  style={{
                    borderRadius: '10px',
                    border: '8px solid var(--brown)',
                    boxShadow: '5px 5px 0px #897668',
                  }}
                />
              </div>
              <div>
                <p className={styles.large_text}>Step 3</p>
                <Spacer height={5} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt, ut labore et dolore magna
                  aliqua.
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
    </>
  );
}
