import { useContext } from "react";
import { ChallengesContext } from "../../context/challenges.context";
import styles from "./level-up.module.css";

export const LevelUp = () => {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>

        <strong>Parabéns!</strong>
        <p>Você alcançou um novo nível!</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="fechar-modal" />
        </button>
      </div>
    </div>
  );
};
