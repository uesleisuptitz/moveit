import { useState, ReactNode, useEffect } from "react";
import { createContext } from "react";
import challenges from "../challenges.json";

interface ChallengesProviderProps {
  children: ReactNode;
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
  experienceToLevelUp: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [experience, setExperience] = useState(0);
  const [challengesCompleteds, setChallengesCompleteds] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

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
      setLevel(level + 1);
      xp = xp - experienceToLevelUp;
    }
    setExperience(xp);
    setActiveChallenge(null);
    setChallengesCompleteds(challengesCompleteds + 1);
  };

  const experienceToLevelUp = Math.pow((level + 1) * 4, 2);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        experience,
        activeChallenge,
        challengesCompleteds,
        levelUp: () => setLevel(level + 1),
        startNewChallenge,
        resetChallenge,
        experienceToLevelUp,
        completeChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
