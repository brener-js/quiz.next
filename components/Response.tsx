import styles from "../styles/Response.module.css";
import ResponseModel from "../model/response";

interface ResponseProps {
  value: ResponseModel;
  index: number;
  letter: string;
  colorBackgroundLetter: string;
  onResponse: (index: number) => void;
}

export default function Response(props: ResponseProps) {
  const response = props.value;
  const responseReveled = response.reveled ? styles.responseReveled : "";

  return (
    <div
      className={styles.response}
      onClick={() => props.onResponse(props.index)}
    >
      <div className={`${responseReveled} ${styles.contentResponse}`}>
        <div className={styles.front}>
          <div
            className={styles.letter}
            style={{ backgroundColor: props.colorBackgroundLetter }}
          >
            {props.letter}
          </div>
          <div className={styles.value}>{response.value}</div>
        </div>

        <div className={styles.back}>
          {response.correct ? (
            <div className={styles.correct}>
              <div>A resposta certa é ...</div>
              <div className={styles.value}>{response.value}</div>
            </div>
          ) : (
            <div className={styles.wrong}>
              <div>A resposta informada está errada...</div>
              <div className={styles.value}>{response.value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
