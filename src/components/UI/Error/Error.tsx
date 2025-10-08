import { ErrorIcon } from "@icons";
import styles from "./Error.module.scss";

interface ErrorProps {
  message: string;
}

export const Error: React.FC<ErrorProps> = ({ message }) => (
  <div className={styles.errorContainer}>
    <ErrorIcon className={styles.errorIcon} />

    <p className={styles.errorText}>{message}</p>
  </div>
);
