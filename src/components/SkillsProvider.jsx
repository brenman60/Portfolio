import { useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import skillsData from "/portfolio/data/skills.json";

const SkillsContext = createContext();

export const SkillsProvider = ({ children }) => {
  const [skills, setSkills] = useState(skillsData);

//   const filterSkillsByCategory = (category) =>
//     category ? skills.filter(skill => skill.category === category) : skills;

  const value = { skills, setSkills };
  return <SkillsContext.Provider value={value}>{children}</SkillsContext.Provider>;
}

export const useSkills = () => {
    return useContext(SkillsContext);
}
