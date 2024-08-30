import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} alt="logo strony" src="/logo.png" />
      <div className={styles.links_buttons}>
        <Link className={styles.link_button} href="/jak-to-dziala">
          Jak to działa?
        </Link>

        <Link className={styles.link_button} href="/o-mnie">
          O mnie
        </Link>

        <Link className={styles.link_button_contact} href="/kontakt">
          Skontaktuj się
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
