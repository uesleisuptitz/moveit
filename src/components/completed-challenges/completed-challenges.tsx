import { useContext } from "react";
import { ChallengesContext } from "../../context/challenges.context";
import styles from "./completed-challenges.module.css";

export const CompleteChallenges = () => {
  const { challengesCompleteds } = useContext(ChallengesContext);

  return (
    <div className={styles.container}>
      <span>Desafios completos</span>
      <span>{challengesCompleteds}</span>
    </div>
  );
};
