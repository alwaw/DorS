import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

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
