import { useContext } from "react";
import { ChallengesContext } from "../../context/challenges.context";
import styles from "./profile.module.css";

interface ProfileProps {}

export const Profile = (props: ProfileProps) => {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.container}>
      <img src={`https://github.com/uesleisuptitz.png`} alt="user-thumb" />
      <div>
        <strong>Uéslei Suptitz</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Nível {level}
        </p>
      </div>
    </div>
  );
};
