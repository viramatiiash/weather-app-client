import styles from "./Video.module.scss";

export const Video = ({ videoSrc }) => {
  return (
    <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};
