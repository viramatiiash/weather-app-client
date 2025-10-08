import styles from "./Video.module.scss";

interface VideoProps {
  videoSrc: string;
}

export const Video: React.FC<VideoProps> = ({ videoSrc }) => {
  return (
    <video autoPlay loop muted playsInline className={styles.backgroundVideo}>
      <source src={videoSrc} type="video/mp4" />
    </video>
  );
};
