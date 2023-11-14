import { useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";
import StudyList from "../components/StudyList";
import StudyInput from "../components/StudyInput";

const PlannerContents = () => {
  const param = useParams();
  const date = param.date;
  console.log("date :", param.date);
  return (
    <div className="appBodyRight">
      <div className="studyHeader">
        <h3>{date}</h3>
        <h3>%</h3>
      </div>
      <StudyInput />
      <StudyList></StudyList>
    </div>
  );
};
export default PlannerContents;
