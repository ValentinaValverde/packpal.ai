import Image from "next/image";
import styles from "@/app/page.module.css";
import Spacer from "@/components/spacer";
import InfoCard from "@/components/info-card";
import Logo from "@/public/packpal-full.svg";
import Button from "@/components/button";
import Link from "next/link";
import MistralLogo from "@/public/mistral_icon.png";

export default function Home() {
  const data = [
    {
      image: "/image.png",
      title: "Snap a Pic",
      text: "No more tedious manual input. Pack Pal allows your customers to simply take a photo of their belongings. Our sophisticated AI technology analyzes the image, capturing every detail to ensure nothing is overlooked. With just one click, the moving process begins with unprecedented ease.",
    },
    {
      image: "/inventory_list.png",
      title: "Receive the list",
      text: "Leveraging state-of-the-art AI, Pack Pal automatically generates a comprehensive inventory list from the photo. This detailed list is accurate and organized, allowing your team to have a clear understanding of what needs to be moved, ensuring a seamless moving day experience.",
    },
    {
      image: "/quote-example.png",
      title: "Generate a Quote",
      text: "Time is money. Our AI swiftly analyzes the inventory and calculates a precise quote, giving your customers instant pricing transparency. This not only speeds up the decision-making process but also enhances trust and satisfaction.",
    },
  ];

  return (
    <>
      <div className={styles.main}>
        <div
          style={{
            maxWidth: 700,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={MistralLogo}
              alt="Mistral Logo"
              style={{ height: "auto", width: 50 }}
            />
            <Spacer height={10} />
            <p
              style={{
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--khaki)",
              }}
            >
              Powered by MistralAI
            </p>
            <Spacer height={20} />
          </div>

          <h1 style={{ fontSize: 50 }}>
            Streamline Your Quotes with <br /> AI-Powered Inventory Recognition
          </h1>
          <Spacer height={10} />
          <p>
            Pack Pal transforms the quoting process for moving companies by
            utilizing AI technology. Customers simply take a photo, and our AI
            generates a comprehensive inventory list and an accurate quote,
            drastically reducing time spent on manual estimates.
          </p>
          <Spacer height={20} />
          <Link href="#chat">
            <button className={styles.secondary_button}>Try it Out</button>
          </Link>
        </div>
      </div>
      <Spacer height={50} />
      <div
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ maxWidth: 700 }}>
          <b>What is it?</b>
          <Spacer height={20} />
          <p className={styles.large_text}>
            Turn Days Into <span className={styles.red_text}> Minutes</span>
          </p>
          <Spacer height={10} />
          <p>
            In the fast-paced world of moving, every minute counts. Frustrated
            by the time-consuming process of generating quotes, we created Pack
            Pal to revolutionize how moving companies operate. Our solution
            empowers you to offer quick, accurate, and reliable services to your
            customers. With Pack Pal, you can focus on what you do
            best—providing exceptional moving experiences.
          </p>
        </div>
      </div>
      <Spacer height={50} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: 20,
            maxWidth: 700,
          }}
        >
          <b>How does it work?</b>
          <Spacer height={20} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.map((info) => {
              console.log("INFO: ", info);
              return (
                <>
                  <InfoCard
                    photo={info.image}
                    title={info.title}
                    text={info.text}
                  />
                  <Spacer height={40} />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Spacer height={50} />
      <div
        style={{
          padding: 20,
          backgroundColor: "var(--white)",
          borderRadius: 10,
          paddingBottom: 200,
        }}
      >
        <iframe
          src="https://packpalai-15056.chipp.ai"
          height="800px"
          width="100%"
          title="PackPal.ai"
          style={{ border: "none" }}
          id="chat"
        ></iframe>
      </div>

      <div className={styles.end} style={{ marginTop: -150 }}>
        <Image
          src={Logo}
          alt="Pack Pal Logo"
          style={{ width: 300, height: "auto" }}
        />
        <Spacer height={0} />
        <p style={{ textAlign: "center", color: "var(--white)" }}>
          Add Some
          <span className={styles.red_text}> Magic </span>
          to Your Process
        </p>
        <Spacer height={0} />
        <Button
          text={"Contact us!"}
          type="secondary"
          link="mailto:hunter@chipp.ai"
        />
      </div>
    </>
  );
}
