import { useRouter } from "next/router";
import Estatistic from "../components/Estatistic";
import Button from "../components/Button";
import styles from "../styles/Result.module.css";

export default function result() {
  const router = useRouter();

  const total = Number(router.query.total);
  const correctResponses = Number(router.query.correctResponses);
  const percent = Math.round((correctResponses / total) * 100);

  return (
    <div className={styles.result}>
      <h1>Resultado Final</h1>
      <div style={{ display: "flex" }}>
        <Estatistic text="Perguntas" value={total} />
        <Estatistic text="Certas" value={correctResponses} bgColor="#9cd2a4" />
        <Estatistic text="Percentual" value={`${percent}%`} bgColor="#de6a33" />
      </div>
      <Button href="/" text="Tentar Novamente" />
    </div>
  );
}
