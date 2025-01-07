import { useContext } from "react";
import "../styles/workSample.css";
import { TagsContext } from "./TagsProvider";

const WorkSample = ({
  sample
}) => {
  const { getTagNames } = useContext(TagsContext);

  return (
    <div className="workSample">
      
    </div>
  )
}

export default WorkSample
