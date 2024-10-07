import styles from "./ImageHolder.module.css";

function ImageHolder({ src, alt }) {
  return <img alt={alt} src={src} className={styles.picture} />;
}

export default ImageHolder;
