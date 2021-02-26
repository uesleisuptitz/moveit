import { useState, ReactNode, useEffect } from "react";
import { createContext } from "react";
import challenges from "../challenges.json";
import Cookies from "js-cookie";
import { LevelUp } from "../components/level-up/level-up";

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  experience: number;
  challengesCompleteds: number;
}
interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}
interface ChallengesContextData {
  level: number;
  experience: number;
  activeChallenge: Challenge;
  challengesCompleteds: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  closeLevelUpModal: () => void;
  experienceToLevelUp: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider = ({
  children,
  ...rest
}: ChallengesProviderProps) => {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [experience, setExperience] = useState(rest.experience ?? 0);
  const [challengesCompleteds, setChallengesCompleteds] = useState(
    rest.challengesCompleteds ?? 0
  );
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [openModalLevelUp, setOpenModalLevelUp] = useState(false);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    if (rest.experience || (!rest.experience && experience !== 0)) {
      Cookies.set("level", String(level));
      Cookies.set("experience", String(experience));
      Cookies.set("challengesCompleteds", String(challengesCompleteds));
    }
  }, [level, experience, challengesCompleteds]);

  const startNewChallenge = () => {
    let newChallenge =
      challenges[Math.floor(Math.random() * challenges.length)];
    setActiveChallenge(newChallenge);
    new Audio("/notification.mp3").play();
    if (Notification.permission === "granted") {
      new Notification("Novo desafio 🎉", {
        body: `Valendo ${newChallenge.amount}XP!`,
      });
    }
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  const completeChallenge = () => {
    if (!activeChallenge) return;
    const { amount } = activeChallenge;
    let xp = experience + amount;
    if (xp >= experienceToLevelUp) {
      levelUp();
      xp = xp - experienceToLevelUp;
    }
    setExperience(xp);
    setActiveChallenge(null);
    setChallengesCompleteds(challengesCompleteds + 1);
  };

  const levelUp = () => {
    setLevel(level + 1);
    setOpenModalLevelUp(true);
  };

  const experienceToLevelUp = Math.pow((level + 1) * 4, 2);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        experience,
        activeChallenge,
        challengesCompleteds,
        levelUp,
        startNewChallenge,
        resetChallenge,
        experienceToLevelUp,
        completeChallenge,
        closeLevelUpModal: () => setOpenModalLevelUp(false),
      }}
    >
      {children}
      {openModalLevelUp && <LevelUp />}
    </ChallengesContext.Provider>
  );
};
