import React from "react";
import styles from "./footer.module.scss";
import Logo from "public/img/logo.jpg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return <div className={styles.container}>
    <div className={styles.logo}>
        <Link href="/">
          <Image
            src={Logo}
            alt=""
            height={30}
            width={30}
            className={styles.image}
          />
        </Link>
        <span>Mamma's Boy CoffeeShop and Restaurant.</span>
      </div>

      <span>@2023 Mamma's BOI. All rights reserved.</span>
  </div>;
};

export default Footer;
