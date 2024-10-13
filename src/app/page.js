"use client";

import Image from "next/image";
import styles from "./page.module.css";

import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";
import ImageHolder from "./components/ImageHolder/ImageHolder";
import Header from "./components/Header/Header";
// import laptopPhoto from "/photos/with-laptop.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.wrapper_two_sides}>
        <ImageHolder
          src={"/photos/with-laptop.jpg"}
          alt="assistant's big picture"
        />
        <Header>
          Oszczędzam <br />
          <span className={styles.emphasis_1}>
            TWÓJ <br />
          </span>
          <span className={styles.emphasis_1}>czas </span>
          <br />w<span className={styles.emphasis_2}> biznesie.</span>
        </Header>
      </div>
      <div> hello world </div>
      <p>
        dowiedz się o mnie więcej <Link href="/o-mnie">tutaj</Link>
      </p>
      <p>
        Tu będzie link do <Link href="/kontakt">formularza kontaktowego</Link>
      </p>
    </>
  );
}

//todo:
//1 - dodać przycisk CTA do pierwszego segmentu strony
//2 - dodać widok na urządzenia mobilne
//3 - czy obrazki wreszcie działają???
