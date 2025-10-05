import React, { useEffect } from "react";
import { SkillsProps } from "./Skills.types";

export const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1500);
  }, []);
  return (
    <>
      <ul>
        {skills.map((skill, index) => (
          <li key={index + "-" + skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>
          Log in to start learning
        </button>
      )}
    </>
  );
};
