import styles from "./Loading.module.scss";

export const Loading: React.FC = () => (
  <div className={styles.loadingContainer}>
    <div className={styles.loading}>
      <h2 className={styles.text}>Wait please</h2>

      <div className={styles.loader}></div>
    </div>
  </div>
);
