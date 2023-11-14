import classNames from "classnames";
import "./Nav.scss";
const Nav = () => {
  return (
    <div className="Nav">
      <div className={classNames("PlannerTab", { nowTab: true })}>플래너</div>
      <div className={classNames("GoalTab", { nowTab: false })}>위클리</div>
      <div className={classNames("SubjectTab", { nowTab: false })}>과목별</div>
    </div>
  );
};
export default Nav;
