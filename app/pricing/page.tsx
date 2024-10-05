import styles from '@/app/page.module.css';
// import InfoCard from '@/components/info-card';
import Spacer from '@/components/spacer';
import Image from 'next/image';
import Logo from '@/public/packpal-full.svg';
import Button from '@/components/button';
import PriceCard from '@/components/price-card';

export default function Page() {
  const data = [
    { price: 100, title: 'Something', text: 'lorem ipsum dolor sit amet' },
    { price: 200, title: 'Something', text: 'lorem ipsum dolor sit amet' },
    { price: 300, title: 'Something', text: 'lorem ipsum dolor sit amet' },
  ];

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
          <p className={styles.large_text}>Pricing</p>
          <Spacer height={30} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt, ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <Spacer height={30} />
          <div className={styles.pricing_container}>
            {data.map((info) => {
              return (
                <PriceCard
                  price={info.price}
                  title={info.title}
                  text={info.text}
                />
              );
            })}
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
