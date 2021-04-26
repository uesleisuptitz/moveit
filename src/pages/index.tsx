import { ExperienceBar } from "../components/experience-bar/experience-bar";
import styles from "./index.module.css";
import { Profile } from "../components/profile/profile";
import { CompleteChallenges } from "../components/completed-challenges/completed-challenges";
import { Countdown } from "../components/countdown/countdown";
import { ChallengeBox } from "../components/challenge-box/challenge-box";
import { CountdownProvider } from "../context/countdown.context";
import { GetServerSideProps } from "next";
import { ChallengesProvider } from "../context/challenges.context";
import Head from "next/head";

interface HomeProps {
  level: number;
  experience: number;
  challengesCompleteds: number;
}

export default function Home({
  level,
  experience,
  challengesCompleteds,
}: HomeProps) {
  return (
    <ChallengesProvider
      level={level}
      experience={experience}
      challengesCompleteds={challengesCompleteds}
    >
      <Head>
        <title>Move.it</title>
        <meta name="google-site-verification" content="WsLtONAzmEe1xFBqy6HaBGFx4XcJyJD5bR1w0CnazVA" />
      </Head>
      <div className={styles.container}>
        <ExperienceBar />
        <CountdownProvider>
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
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, experience, challengesCompleteds } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      experience: Number(experience),
      challengesCompleteds: Number(challengesCompleteds),
    },
  };
};
