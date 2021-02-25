import { useContext, useEffect } from "react";
import { CountdownContext } from "../../context/countdown.context";
import styles from "./countdown.module.css";

export const Countdown = () => {
  const {
    minutes,
    seconds,
    isCompleted,
    isActive,
    resetCountdown,
    startCountdown,
  } = useContext(CountdownContext);

  const myMinutes = String(minutes).padStart(2, "0").split("");
  const mySeconds = String(seconds).padStart(2, "0").split("");

  useEffect(() => {
    if (isActive)
      document.title = `${myMinutes[0]}${myMinutes[1]}:${mySeconds[0]}${mySeconds[1]} | Move.it`;
    else document.title = `Move.it`;
  }, [seconds]);

  return (
    <div>
      <div className={styles.container}>
        <div>
          <span>{myMinutes[0]}</span>
          <span>{myMinutes[1]}</span>
        </div>
        <span>:</span>
        <div>
          <span>{mySeconds[0]}</span>
          <span>{mySeconds[1]}</span>
        </div>
      </div>

      <button
        disabled={isCompleted}
        type="button"
        className={`${styles.btnStart} ${isActive && styles.btnStop}`}
        onClick={() =>
          isCompleted ? {} : !isActive ? startCountdown() : resetCountdown()
        }
      >
        {isCompleted
          ? "Ciclo encerrado!"
          : !isActive
          ? "Iniciar um ciclo"
          : "Abandonar ciclo"}
      </button>
    </div>
  );
};
