import { useState, ReactNode } from "react";
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
  experienceToLevelUp: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider = ({ children }: ChallengesProviderProps) => {
  const [level, setLevel] = useState(1);
  const [experience, setExperience] = useState(0);
  const [challengesCompleteds, setChallengesCompleteds] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const startNewChallenge = () => {
    let newChallenge =
      challenges[Math.floor(Math.random() * challenges.length)];
    setActiveChallenge(newChallenge);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
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
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};
