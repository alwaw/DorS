import styles from "./ImageHolder.module.css";
import Image from "next/image";

function ImageHolder({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      className={styles.picture}
      width={0}
      height={500}
      sizes="50vw"
    />
  );
}

export default ImageHolder;
