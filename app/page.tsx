import Image from 'next/image';
import styles from '@/app/page.module.css';
import Spacer from '@/components/spacer';
import InfoCard from '@/components/info-card';
import Logo from '@/public/packpal-logo.svg';
import Button from '@/components/button';

export default function Home() {
  const data = [
    {
      image: '',
      title: 'Snap a Pic',
      text: 'No more tedious manual input. Pack Pal allows your customers to simply take a photo of their belongings. Our sophisticated AI technology analyzes the image, capturing every detail to ensure nothing is overlooked. With just one click, the moving process begins with unprecedented ease.',
    },
    {
      image: '',
      title: 'Receive the list',
      text: 'Leveraging state-of-the-art AI, Pack Pal automatically generates a comprehensive inventory list from the photo. This detailed list is accurate and organized, allowing your team to have a clear understanding of what needs to be moved, ensuring a seamless moving day experience.',
    },
    {
      image: '',
      title: 'Generate a Quote',
      text: 'Time is money. Our AI swiftly analyzes the inventory and calculates a precise quote, giving your customers instant pricing transparency. This not only speeds up the decision-making process but also enhances trust and satisfaction.',
    },
  ];

  return (
    <>
      <div className={styles.main}>
        <h1 style={{ fontSize: 50 }}>
          Streamline Your Quotes with AI-Powered Inventory Management
        </h1>
        <Spacer height={10} />
        <p>
          Pack Pal transforms the quoting process for moving companies by
          utilizing AI technology. Customers simply take a photo, and our AI
          generates a comprehensive inventory list and an accurate quote,
          drastically reducing time spent on manual estimates.
        </p>
        <Spacer height={20} />
        <Button text={'Try it Out'} type="secondary" />
      </div>
      <Spacer height={50} />
      <div style={{ padding: 20 }}>
        <b>What is it?</b>
        <Spacer height={20} />
        <p className={styles.large_text}>
          Turn Days <br /> Into{' '}
          <span className={styles.red_text}> Minutes</span>
        </p>
        <Spacer height={10} />
        <p>
          We’ve created a powerful tool that will superpower your quoting
          process.
          <br />
          Lorem ipsum tincidunt Nunc facilisis Nam dignissim, eget fringilla
          elementum Quisque adipiscing tortor.
        </p>
      </div>
      <Spacer height={50} />
      <div style={{ padding: 20 }}>
        <b>How does it work?</b>
        <Spacer height={20} />
        {data.map((info) => {
          console.log('INFO: ', info);
          return (
            <>
              <InfoCard
                // photo={info.photo}
                title={info.title}
                text={info.text}
              />
              <Spacer height={40} />
            </>
          );
        })}
      </div>
      <Spacer height={50} />
      <div
        style={{
          padding: 20,
          backgroundColor: 'var(--white)',
          borderRadius: 10,
          paddingBottom: 200,
        }}
      >
        <iframe
          src="https://packpalai-15056.chipp.ai"
          height="800px"
          width="100%"
          title="PackPal.ai"
          style={{ border: 'none' }}
        ></iframe>
      </div>

      <div className={styles.end} style={{ marginTop: -150 }}>
        <Image
          src={Logo}
          alt="Pack Pal Logo"
          style={{ width: 100, height: 'auto' }}
        />
        <Spacer height={0} />
        <p className={styles.large_text} style={{ textAlign: 'center' }}>
          Add some
          <span className={styles.red_text}> Magic</span>
          <br />
          to your process
        </p>
        <Spacer height={0} />
        <Button text={'Contact us!'} type="secondary" />
      </div>
    </>
  );
}
