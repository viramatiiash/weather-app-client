import { QuestionIcon } from "@icons";
import styles from "./Empty.module.scss";

export const Empty: React.FC = () => (
  <div className={styles.emptyContainer}>
    <QuestionIcon className={styles.questionIcon} />
    
    <p className={styles.questionText}>Enter a city name to see the weather</p>
  </div>
);
