import styles from "@/app/page.module.css";
import Button from "./button";
import Image from "next/image";
import Logo from "@/public/packpal-logo.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className={styles.nav}>
      {/* <p style={{ color: 'var(--white)', fontSize: 20 }}>PackPal.AI</p> */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Image src={Logo} alt="Logo" style={{ width: 50, height: "auto" }} />
        <Link
          style={{
            color: "var(--white)",
            fontFamily: "OstrichSans",
            fontSize: 30,
            marginTop: 5,
          }}
          href={"/"}
        >
          PACKPAL.AI
        </Link>
      </div>
      <div>
        <Link href={"/pricing"} style={{ marginRight: 15 }}>
          Pricing
        </Link>
        <Link href={"/how-it-works"} style={{ marginRight: 15 }}>
          How it Works
        </Link>
        <Button
          text={"Contact Us!"}
          type="secondary"
          link="mailto:hunter@chipp.ai"
        />
      </div>
    </div>
  );
}
