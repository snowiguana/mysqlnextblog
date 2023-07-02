"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import Logo from "public/img/logo.jpg";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 3,
    title: "Login",
    url: "/login",
  },

  {
    id: 4,
    title: "Register",
    url: "/register",
  },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={Logo}
            alt=""
            height={100}
            width={100}
            className={styles.image}
          />
        </Link>
      </div>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            <h6>{link.title}</h6>
          </Link>
        ))}
        <span>Jane Doe</span>
        <button className={styles.logout}>Logout</button>
        <div className={styles.write}>
          <Link href="/write">Write</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
