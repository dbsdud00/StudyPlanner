import { useState } from "react";
import Button from "../components/Button";
import "../css/App.css";
const Main = () => {
  return (
    <div className="main_content">
      <div className="Nav">
        <div className="PlannerTab">플래너</div>
        <div className="GoalTab">위클리</div>
        <div className="SubjectTab">과목별</div>
      </div>
      <div className="PlannerHeader">
        <h1>Study Planner</h1>
      </div>
      <div className="appBody">
        <div className="appBodyLeft">
          <ul className="studyDateList">printDateList</ul>
        </div>
        <div className="appBodyRight">
          <div className="studyHeader">
            <h3>nowDate</h3>
            <h3>%</h3>
          </div>

          <div className="studyInput">
            <div>X</div>
            <div className="subjectMenu">
              <input name="td_subject" type="text" placeholder="과목" />
            </div>
            <div className="studyInputBox">
              <input name="td_content" type="text" placeholder="content" />
            </div>

            <div className="studyPlus">추가</div>
          </div>
          <div className="studyList">
            <table>
              <thead>
                <tr>
                  <th colSpan="4">JavaScript</th>
                </tr>
              </thead>
              <tbody>printTodoList</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
