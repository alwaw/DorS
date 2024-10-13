"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import logo from "/misc/logo.png";

function Navbar() {
  return (
    <header className={styles.header}>
      <Image
        src={logo}
        alt="logo strony"
        className={styles.logo}
        width={120}
        height={80}
        sizes="20vw"
      />
      <motion.div className={styles.link_button} whileHover={{ scale: 1.1 }}>
        <Link href="/jak-to-dziala">Jak to działa?</Link>
      </motion.div>

      <motion.div className={styles.link_button} whileHover={{ scale: 1.1 }}>
        <Link className={styles.link_button} href="/o-mnie">
          O mnie
        </Link>
      </motion.div>

      <motion.div className={styles.link_button} whileHover={{ scale: 1.1 }}>
        <Link className={styles.link_button_contact} href="/kontakt">
          Skontaktuj się
        </Link>
      </motion.div>
    </header>
  );
}

export default Navbar;
