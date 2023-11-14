import { useSelector } from "react-redux";
import { useLoaderData, useParams } from "react-router-dom";

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
      <div className="studyInput">
        <div>X</div>
        <div className="subjectMenu">과목</div>
        <div className="studyInputBox">
          <input name="td_content" type="text" placeholder="content" />
        </div>
        <div className="studyPlus">추가</div>
      </div>
      <div className="studyList">
        <ul>
          <li>dd</li>
          <li>ddd</li>
        </ul>
      </div>
    </div>
  );
};
export default PlannerContents;
