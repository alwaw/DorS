"use client";

import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} alt="logo strony" src="/logo.png" />
      <div className={styles.links_buttons}>
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
      </div>
    </header>
  );
}

export default Navbar;
