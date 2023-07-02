import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non dolor iusto
        quo, numquam, harum molestiae assumenda quibusdam voluptatum placeat
        impedit nihil totam accusamus facilis eum molestias suscipit?
        Voluptates, rem suscipit.
      </h1>
    </div>
  );
}
