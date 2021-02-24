import { useContext } from "react";
import { ChallengesContext } from "../../context/challenges.context";
import styles from "./experience-bar.module.css";

interface BarProps {}

export const ExperienceBar = (props: BarProps) => {
  const { experience, experienceToLevelUp } = useContext(ChallengesContext);

  const percentToLevelUp = Math.round((experience * 100) / experienceToLevelUp);

  return (
    <header className={styles.experienceBar}>
      <span>0 XP</span>
      <div>
        <div style={{ width: `${percentToLevelUp}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToLevelUp}%` }}
        >
          {experience} XP
        </span>
      </div>
      <span>{experienceToLevelUp} XP</span>
    </header>
  );
};
