import styles from "@/app/page.module.css";
import PlaceholderImage from "@/public/packpal-logo.svg";
import Spacer from "@/components/spacer";
import Image from "next/image";

export default function InfoCard({
  photo,
  title,
  text,
}: {
  photo?: string;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.card}>
      <div
        style={{ position: "relative", minWidth: "329px", minHeight: "314px" }}
      >
        <Image
          src={photo || PlaceholderImage}
          alt="Card Image"
          fill
          objectFit="cover"
          style={{
            borderRadius: "6px",
            border: "12px solid var(--brown)",
            boxShadow: "6px 9px 0px black",
          }}
        />
      </div>
      <div>
        <p className={styles.large_text}>{title}</p>
        <Spacer height={5} />
        <p>{text}</p>
      </div>
    </div>
  );
}
