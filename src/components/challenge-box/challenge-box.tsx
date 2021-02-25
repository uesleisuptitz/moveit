import { useContext } from "react";
import { ChallengesContext } from "../../context/challenges.context";
import { CountdownContext } from "../../context/countdown.context";
import styles from "./challenge-box.module.css";

interface ChallengeBoxProps {}

export const ChallengeBox = (props: ChallengeBoxProps) => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  const handleSuccess = () => {
    completeChallenge();
    resetCountdown();
  };
  const handleFail = () => {
    resetChallenge();
    resetCountdown();
  };

  return (
    <div className={styles.container}>
      {activeChallenge ? (
        <div className={styles.challenge}>
          <header> Ganhe {activeChallenge.amount} XP</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong> Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.btnFail}
              onClick={handleFail}
            >
              Não deu...
            </button>
            <button
              type="button"
              className={styles.btnSuccess}
              onClick={handleSuccess}
            >
              Consegui!
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.empty}>
          <strong>
            Inicie um ciclo para receber desafios a serem completados.
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="level-up-icon" />
            Avance de nível completando desafios!
          </p>
        </div>
      )}
    </div>
  );
};
