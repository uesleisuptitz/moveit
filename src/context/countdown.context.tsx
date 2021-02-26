import { useState, ReactNode, useContext, useEffect } from "react";
import { createContext } from "react";
import { ChallengesContext } from "./challenges.context";

interface CountdownProviderProps {
  children: ReactNode;
}

interface CountdownContextData {
  minutes: number;
  seconds: number;
  isCompleted: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdown: () => void;
}

let timeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export const CountdownProvider = ({ children }: CountdownProviderProps) => {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (isActive && time > 0)
      timeout = setTimeout(() => setTime(time - 1), 1000);
    else if (isActive && time === 0) {
      setIsActive(false);
      setIsCompleted(true);
      startNewChallenge();
    }
  }, [isActive, time]);

  const resetCountdown = () => {
    clearTimeout(timeout);
    setIsActive(false);
    setIsCompleted(false);
    setTime(5);
  };

  return (
    <CountdownContext.Provider
      value={{
        minutes: Math.floor(time / 60),
        seconds: time % 60,
        isCompleted,
        isActive,
        startCountdown: () => setIsActive(true),
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};
