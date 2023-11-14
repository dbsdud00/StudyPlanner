import { Outlet } from "react-router-dom";
import "../css/Planner.css";
import Calendar from "../components/Calendar";
import Nav from "../components/Nav";

const Main = () => {
  return (
    <div className="main_content">
      <Nav />
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
