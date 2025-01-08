import { useEffect, useState } from "react";
import "../styles/workSampleList.css";
import WorkSample from "./WorkSample";

const WorkSampleList = () => {
  const [data, setData] = useState(null);
    
  useEffect(() => {
    fetch("data/workSamples.json")
    .then(response => response.json())
    .then(jsonData => setData(jsonData))
    .catch(error => console.error("Error loading JSON: ", error));
  }, []);

  if (!data) {
    return <></>;
  }

  return (
    <div className="workSampleList">
      {data.map((item, index) => (
        <WorkSample key={index} sample={item} />
      ))}
    </div>
  )
}

export default WorkSampleList
