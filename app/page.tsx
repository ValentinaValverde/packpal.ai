import Image from "next/image";
import styles from "@/app/page.module.css";
import FullLogo from "@/public/packpal-full.svg";
import Spacer from "@/components/spacer";
import InfoCard from "@/components/info-card";
import Logo from "@/public/packpal-logo.svg";
import Button from "@/components/button";

export default function Home() {
  const data = [
    {
      image: "",
      title: "Snap a Pic",
      text: "Lorem ipsum tincidunt Nunc facilisis Nam dignissim, eget fringilla elementum.",
    },
    {
      image: "",
      title: "Receive the list",
      text: "Lorem ipsum tincidunt Nunc facilisis Nam dignissim, eget fringilla elementum.",
    },
    {
      image: "",
      title: "Generate a Quote",
      text: "Lorem ipsum tincidunt Nunc facilisis Nam dignissim, eget fringilla elementum.",
    },
  ];

  return (
    <>
      <div className={styles.main}>
        <Image
          src={FullLogo}
          alt="Pack Pal Logo"
          style={{
            width: 300,
            height: "auto",
            borderRadius: 10,
          }}
        />
      </div>
      <Spacer height={50} />
      <div style={{ padding: 20 }}>
        <b>What is it?</b>
        <Spacer height={20} />
        <p className={styles.large_text}>
          Turn Days <br /> Into{" "}
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
          console.log("INFO: ", info);
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
      <div style={{ padding: 20 }}>
        <iframe
          src="https://packpalai-15056.chipp.ai"
          height="800px"
          width="100%"
          title="PackPal.ai"
          style={{ border: "none" }}
        ></iframe>
      </div>

      <div className={styles.end}>
        <Image
          src={Logo}
          alt="Pack Pal Logo"
          style={{ width: 100, height: "auto" }}
        />
        <Spacer height={0} />
        <p className={styles.large_text_brown} style={{ textAlign: "center" }}>
          Add some
          <span className={styles.red_text}> Magic</span>
          <br />
          to your process
        </p>
        <Spacer height={0} />
        <Button text={"Try it out now!"} />
      </div>
    </>
  );
}
