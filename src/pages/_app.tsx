import "./global.css";
import Head from "next/head";
import { ChallengesProvider } from "../context/challenges.context";

function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Head>
        <title>Move.it</title>
      </Head>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default MyApp;
