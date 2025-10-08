import styles from "./Input.module.scss";
import { Button } from "./../Button/Button";

interface InputProps {
  value: string;
  onChange: (val: string) => void;
  onSearch: () => void;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  onSearch,
  placeholder = "Enter city...",
}) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.blur}></div>

      <input
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />

      <Button onClick={onSearch}>Search</Button>
    </div>
  );
};
