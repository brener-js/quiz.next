import styles from "../styles/Estatistic.module.css";

interface EstatisticProps {
  value: any;
  text: string;
  bgColor?: string;
  fontColor?: string;
}

export default function Estatistic(props: EstatisticProps) {
  return (
    <div className={styles.estatistic}>
      <div
        className={styles.value}
        style={{
          backgroundColor: props.bgColor ?? "#fdd60f",
          color: props.fontColor ?? "#333",
        }}
      >
        {props.value}
      </div>
      <div className={styles.text}>{props.text}</div>
    </div>
  );
}
