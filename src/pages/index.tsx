import { ExperienceBar } from "../components/experience-bar/experience-bar";
import styles from "./index.module.css";
import { Profile } from "../components/profile/profile";
import { CompleteChallenges } from "../components/completed-challenges/completed-challenges";
import { Countdown } from "../components/countdown/countdown";
import { ChallengeBox } from "../components/challenge-box/challenge-box";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
