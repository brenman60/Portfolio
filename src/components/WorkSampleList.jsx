import { useEffect, useState } from "react";
import "../styles/workSampleList.css";

const WorkSampleList = () => {
  const [data, setData] = useState(null);
    
  useEffect(() => {
    fetch("data/workSamples.json")
    .then(response => response.json())
    .then(jsonData => setData(jsonData))
    .catch(error => console.error("Error loading JSON: ", error));
  }, []);

  return (
    <div className="workSampleList">
      
    </div>
  )
}

export default WorkSampleList
