import { useState, useEffect } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

export const TagsContext = createContext();

export const TagsProvider = ({ children }) => {
  const [tags, setTags] = useState(null);

  useEffect(() => {
    fetch("/portfolio/data/tags.json")
    .then(response => response.json())
    .then(jsonData => setTags(jsonData))
    .catch(error => console.error("Error loading JSON: ", error));
  }, []);

//   const filterSkillsByCategory = (category) =>
//     category ? skills.filter(skill => skill.category === category) : skills;

  const getTagNames = (tagIds) => {
    if (!tags || !Array.isArray(tagIds)) return [];

    return tagIds.map(id => {
      const tag = tags[id];
      return tag ? tag.name : null;
    }).filter(name => name !== null);
  };

  const getTags = () => {
    if (!tags) return [];

    return tags;
  }

  const value = { tags, setTags, getTagNames, getTags };
  return <TagsContext.Provider value={value}>{children}</TagsContext.Provider>;
}

export const useTags = () => {
    return useContext(TagsContext);
}
