import "./style.css";

interface BarProps {}

export const ExperienceBar = (props: BarProps) => {
  return (
    <header className="experience-bar">
      <span>0 XP</span>
      <div>
        <div style={{ width: "50%" }} />
        <span className="current-experience" style={{ left: "50%" }}>
          300 XP
        </span>
      </div>
      <span>600 XP</span>
    </header>
  );
};
