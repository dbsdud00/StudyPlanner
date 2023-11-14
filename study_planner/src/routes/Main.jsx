import { Outlet } from "react-router-dom";
import "../css/App.css";
import calendarSlice, { addDate } from "../feature/calendarSlice";
import { useEffect } from "react";
import PlannerContents from "./PlannerContents";
import Calendar from "../components/Calendar";

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
        <Calendar />
        <Outlet />
      </div>
    </div>
  );
};
export default Main;
