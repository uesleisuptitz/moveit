import styles from "./profile.module.css";

interface ProfileProps {}

export const Profile = (props: ProfileProps) => {
  return (
    <div className={styles.container}>
      <img src={`https://github.com/uesleisuptitz.png`} alt="user-thumb" />
      <div>
        <strong>Uéslei Suptitz</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Nível 1
        </p>
      </div>
    </div>
  );
};
