import { useEffect, useState, useContext } from "react";
import { ChallengesContext } from "../../context/challenges.context";
import styles from "./countdown.module.css";

let timeout: NodeJS.Timeout;

export const Countdown = () => {
  const { startNewChallenge, activeChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(
    (activeChallenge && activeChallenge.amount) || 5
  );
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const minutes = String(Math.floor(time / 60))
    .padStart(2, "0")
    .split("");
  const seconds = String(time % 60)
    .padStart(2, "0")
    .split("");

  useEffect(() => {
    if (isActive && time > 0)
      timeout = setTimeout(() => setTime(time - 1), 1000);
    else if (isActive && time === 0) {
      setIsActive(false);
      setIsCompleted(true);
      startNewChallenge();
    }
  }, [isActive, time]);

  const resetTime = () => {
    setIsActive(false);
    clearTimeout(timeout);
  };

  return (
    <div>
      <div className={styles.container}>
        <div>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
        </div>
        <span>:</span>
        <div>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </div>
      </div>

      <button
        disabled={isCompleted}
        type="button"
        className={`${styles.btnStart} ${isActive && styles.btnStop}`}
        onClick={() =>
          isCompleted ? {} : !isActive ? setIsActive(!isActive) : resetTime()
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
