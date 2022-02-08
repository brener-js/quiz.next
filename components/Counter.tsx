import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Counter.module.css";

interface CounterProps {
  key: any;
  duration: number;
  timeOut: () => void;
}

export default function Counter(props: CounterProps) {
  return (
    <div className={styles.counter}>
      <CountdownCircleTimer
        size={120}
        isPlaying
        duration={props.duration}
        onComplete={props.timeOut}
        colors={[
          ["#bcd596", 0.33],
          ["#f7b801", 0.33],
          ["#ed827a", 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
