import { useContext } from "react";
import { ChallengesContext } from "../../context/challenges.context";
import styles from "./challenge-box.module.css";

interface ChallengeBoxProps {}

export const ChallengeBox = (props: ChallengeBoxProps) => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  const challenges = true;
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
              onClick={resetChallenge}
            >
              Não deu...
            </button>
            <button type="button" className={styles.btnSuccess}>
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
